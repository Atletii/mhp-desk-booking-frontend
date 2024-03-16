const axios = require("axios");

const baseURL = "http://localhost:8080";
console.log(baseURL);

const axiosInstance = axios.create({
  baseURL: baseURL,
});

module.exports = axiosInstance;
function sendRequestWithBearerToken(method, url, data = null, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  if (method.toLowerCase() === "get") {
    return axiosInstance.get(url, config);
  } else if (method.toLowerCase() === "post") {
    return axiosInstance.post(url, data, config);
  }
}

module.exports = { axiosInstance, sendRequestWithBearerToken };
