const axios = require("axios");

const baseURL = "https://mhp-desk-booking-backend.galitianu.com";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

module.exports = axiosInstance;

function sendRequestWithBearerToken(method, url, data = null, currentUser) {
  if (currentUser) {
    const token = currentUser.accessToken;
    const uid = currentUser.uid;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        localId: uid,
        "Content-Type": "application/json",
      },
    };

    method = method.toLowerCase();

    switch (method) {
      case "get":
        return axiosInstance.get(url, config);
      case "post":
        return axiosInstance.post(url, data, config);
      case "delete":
        return axiosInstance.delete(url, { ...config, data });
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  } else {
    throw new Error("User not authenticated");
  }
}

module.exports = { axiosInstance, sendRequestWithBearerToken, baseURL };
