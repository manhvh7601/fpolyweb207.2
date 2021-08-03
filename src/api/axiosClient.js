import axios from "axios";

const axiosClient = axios.create({
  baseURL: "  http://localhost:4000",
  headers: {
    "Content-Type": "application/json", // default có rồi mà?
  },
});
export default axiosClient;
