const axios = require("axios");
import { useAuth } from "@/contexts/AuthContext";

const baseURL = "http://localhost:8080";
// console.log(baseURL);

const axiosInstance = axios.create({
  baseURL: baseURL,
});

module.exports = axiosInstance;

function sendRequestWithBearerToken(method, url, data = null, localId) {
  const { currentUser } = useAuth();
  const token = currentUser.accessToken;
  const uid = currentUser.uid;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      localId: uid,
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
