import React from "react";
import { useEffect, useState, useCallback } from "react";
import { agriSureApi } from "../Api/AgrisureApi";

function Lending() {
  const [loanResult, setLoanResult] = useState(null);
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const [accountNumber, setAccountNumber] = useState("");
  const [bankCode, setBankCode] = useState("");

  const [loadingOffers, setLoadingOffers] = useState(false);
  const [acceptingLoan, setAcceptingLoan] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load saved loan result
  useEffect(() => {
    const stored = localStorage.getItem("loan_result");
    if (stored) {
      const parsed = JSON.parse(stored);
      setLoanResult(parsed);
    }
  }, []);

  console.log("API:", agriSureApi);
  console.log("LOGIN TYPE:", typeof agriSureApi.login);
  const getLoanOffers = useCallback(async () => {
    setLoadingOffers(true);
    setError("");
    setSuccess("");

    try {
      const payload = {
        amount: loanResult?.loan_amount || loanResult?.recommended_amount || 0,
        name: loanResult?.name || "maize",
        risk: loanResult?.risk || "B+",
      };

      const data = await agriSureApi.fetchLoanOffers(payload);

      const extractedOffers = Array.isArray(data)
        ? data
        : data.offers || data.loan_offers || data.results || [];

      setOffers(extractedOffers);

      if (extractedOffers.length > 0) {
        setSelectedOffer(extractedOffers[0]);
      }
    } catch (err) {
      setError(err.message || "Could not fetch loan offers");
    } finally {
      setLoadingOffers(false);
    }
  }, [loanResult]);

  useEffect(() => {
    if (loanResult) {
      getLoanOffers();
    }
  }, [loanResult, getLoanOffers]);

  const handleAcceptLoan = async () => {
    setError("");
    setSuccess("");

    if (!selectedOffer) {
      setError("Please select a loan offer first");
      return;
    }

    if (!accountNumber || !bankCode) {
      setError("Please enter your account number and bank code");
      return;
    }

    setAcceptingLoan(true);

    try {
      const payload = {
        offerId: selectedOffer.offer_id || selectedOffer.id,
        destinationAccount_number: accountNumber,
        destinationBankCode: bankCode,
        amount: selectedOffer.amount,
      };

      const data = await agriSureApi.acceptLoan(payload);

      setSuccess(data.message || "Loan accepted successfully");

      localStorage.setItem("accepted_loan", JSON.stringify(data));
    } catch (err) {
      setError(
        err?.message || JSON.stringify(err) || "Could not fetch loan offers",
      );
    } finally {
      setAcceptingLoan(false);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div>
          <p className="text-[12px] tracking-[3px] text-[#7b807b] mb-2.5 font-bold">
            FUNDING DECISION
          </p>
          <h1 className="text-[32px] md:text-[48px] font-extrabold text-[#0b5e20]">
            Lending Offers
          </h1>
          <p className="mt-3 text-[#5d645d] text-[15px] md:text-[16px]">
            Review your available loan options and finalize your preferred
            offer.
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded-xl font-semibold">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-[#0b5e20] px-4 py-3 rounded-xl font-semibold">
            {success}
          </div>
        )}

        {/* Summary */}
        <div className="bg-[#fbfbf9] rounded-3xl p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-center shadow-sm">
          <div>
            <p className="text-xs uppercase text-[#6a706a] mb-1">
              Recommended Loan
            </p>
            <h2 className="text-2xl md:text-[30px] font-extrabold text-[#0b5e20]">
              ${loanResult?.loan_amount || loanResult?.recommended_amount || 0}
            </h2>
          </div>

          <div>
            <p className="text-xs uppercase text-[#6a706a] mb-1">Risk Score</p>
            <h2 className="text-2xl font-extrabold text-[#0b5e20]">
              {loanResult?.risk_score || "--"}
            </h2>
          </div>

          <div>
            <p className="text-xs uppercase text-[#6a706a] mb-1">Crop</p>
            <h2 className="text-2xl font-extrabold text-[#0b5e20]">
              {loanResult?.crop || "Maize"}
            </h2>
          </div>

          <button
            onClick={getLoanOffers}
            disabled={loadingOffers}
            className="col-span-2 md:col-span-1 w-full md:w-auto py-3 px-5 rounded-full bg-[#0b5e20] text-white font-bold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loadingOffers ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Refresh Offers"
            )}
          </button>
        </div>

        {/* Offers */}
        <div className="bg-[#fbfbf9] rounded-3xl p-5 md:p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-5">Available Offers</h3>

          {loadingOffers ? (
            <div className="bg-[#f3f4f2] rounded-xl p-5 text-[#667066] font-semibold">
              Fetching loan offers...
            </div>
          ) : offers.length === 0 ? (
            <div className="bg-[#f3f4f2] rounded-xl p-5 text-[#667066] font-semibold">
              No loan offers available yet.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {offers.map((offer, index) => {
                const isSelected =
                  (selectedOffer?.offer_id || selectedOffer?.id) ===
                  (offer.offer_id || offer.id);

                return (
                  <div
                    key={offer.offer_id || offer.id || index}
                    onClick={() => setSelectedOffer(offer)}
                    className={`rounded-[22px] p-5 cursor-pointer border-2 transition 
                  ${
                    isSelected
                      ? "border-[#0b5e20] bg-[#eef7ef]"
                      : "border-transparent bg-[#f4f7f4] hover:border-[#0b5e20]/40"
                  }`}
                  >
                    <p className="text-xs font-extrabold text-[#0b5e20] tracking-widest mb-3">
                      LOAN OFFER
                    </p>

                    <h2 className="text-3xl font-extrabold text-[#0b5e20] mb-4">
                      ${offer.amount || offer.loan_amount || 0}
                    </h2>

                    <div className="flex justify-between mb-2 text-[#4c554c]">
                      <span>Interest Rate</span>
                      <strong>{offer.interest_rate || "N/A"}%</strong>
                    </div>

                    <div className="flex justify-between mb-2 text-[#4c554c]">
                      <span>Tenure</span>
                      <strong>
                        {offer.tenure || offer.duration || "N/A"} months
                      </strong>
                    </div>

                    <div className="flex justify-between mb-2 text-[#4c554c]">
                      <span>Repayment</span>
                      <strong>
                        ${offer.monthly_repayment || offer.repayment || "N/A"}
                      </strong>
                    </div>

                    <div className="flex justify-between text-[#4c554c]">
                      <span>Status</span>
                      <strong>{offer.status || "Available"}</strong>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Accept Loan */}
        <div className="bg-[#fbfbf9] rounded-4xl p-5 md:p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-5">Accept Selected Loan</h3>

          {selectedOffer ? (
            <div className="bg-[#eef3ee] p-5 rounded-xl mb-5">
              <p className="text-xs uppercase text-[#5f665f] mb-1">
                Selected Offer
              </p>
              <h2 className="text-3xl font-extrabold text-[#0b5e20] mb-1">
                ${selectedOffer.amount || selectedOffer.loan_amount || 0}
              </h2>
              <p className="text-[#556055]">
                {selectedOffer.interest_rate || "N/A"}% interest •{" "}
                {selectedOffer.tenure || selectedOffer.duration || "N/A"} months
              </p>
            </div>
          ) : (
            <div className="bg-[#f3f4f2] rounded-xl p-5 text-[#667066] font-semibold mb-5">
              No offer selected
            </div>
          )}

          <div className="flex flex-col gap-3 max-w-md">
            <input
              type="text"
              placeholder="Bank Code"
              value={bankCode}
              onChange={(e) => setBankCode(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5e20]"
            />

            <input
              type="text"
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5e20]"
            />

            <button
              onClick={handleAcceptLoan}
              disabled={acceptingLoan}
              className="mt-2 py-3 rounded-full bg-[#0b5e20] text-white font-bold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {acceptingLoan ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Accept Loan"
              )}
            </button>
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default Lending;
