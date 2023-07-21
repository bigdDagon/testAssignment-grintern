import axios from "axios";

const BASE_URL = "https://gutendex.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
