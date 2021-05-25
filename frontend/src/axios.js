import axios from "axios";

let api;

if (process.env.REACT_APP_STATUS === "production") api = "/api";
else api = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: api,
 
});

export default axiosInstance;

