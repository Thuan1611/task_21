import axios from "axios";
const url = "https://api-class-o1lo.onrender.com/api/thuannh/auth";
const apiAuth = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: url,
});
export default apiAuth;
