import apiAuth from "./auth";

export const registerAdmin = async (body) => {
  const data = await apiAuth.post("/register", body);
  return data;
};
export const loginAdmin = async (body) => {
  const data = await apiAuth.post("/login", body);
  return data;
};
