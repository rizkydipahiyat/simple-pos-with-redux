import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    //  Authorization: `<Your Auth Token>`,
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default axiosRequest;
