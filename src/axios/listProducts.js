import api from "./api";

export const listProductsData = async () => {
  const { data } = await api.get(`products`);
  return data;
};
export const listProductsDetail = async (id) => {
  const { data } = await api.get(`products/${id}`);
  return data;
};
export const deleteProducts = async (id) => {
  const data = await api.delete(`products/${id}`);
  return data;
};
export const addProducts = async (body) => {
  const data = await api.post(`products`, body);
  return data;
};
export const updateProducts = async (id, body) => {
  await api.patch(`products/${id}`, body);
};
