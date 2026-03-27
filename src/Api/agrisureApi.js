const BASE_URL = "https://agrisure-stff.onrender.com";

export const agriSureApi = {
  // REGISTER
  async register(userData) {
    const res = await fetch(`${BASE_URL}/api/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  },

  // LOGIN
  async login(loginData) {
    const res = await fetch(`${BASE_URL}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || "Login failed");
    }

    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);

    return data;
  },

  // REQUEST LOAN
  async requestLoan(payload) {
    const token = localStorage.getItem("access_token");

    const res = await fetch(`${BASE_URL}/api/request-loan/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || data.message || "Loan request failed");
    }

    return data;
  },

  // GET LOAN OFFERS
  async fetchLoanOffers(payload) {
    const token = localStorage.getItem("access_token");

    const res = await fetch(`${BASE_URL}/api/interswitch/loan-offers/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || data.message || "Could not fetch loan offers");
    }

    return data;
  },

  // ACCEPT LOAN
  async acceptLoan(payload) {
    const token = localStorage.getItem("access_token");

    const res = await fetch(`${BASE_URL}/api/interswitch/accept-loan/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || data.message || "Loan acceptance failed");
    }

    return data;
  },

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("loan_result");
  },

  getAccessToken() {
    return localStorage.getItem("access_token");
  },
};