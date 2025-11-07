import axios from "axios";
const url = "http://localhost:3000/";
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: url,
});
export default api;
