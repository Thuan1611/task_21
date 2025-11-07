import api from "./api";

export const listCategoriesData = async () => {
  const { data } = await api.get(`categories`);
  return data;
};
export const listCategoriesDetail = async (id) => {
  const { data } = await api.get(`categories/${id}`);
  return data;
};
export const deleteCategories = async (id) => {
  const data = await api.delete(`categories/${id}`);
  return data;
};
export const addCategories = async (body) => {
  const data = await api.post(`categories`, body);
  return data;
};
export const updateCategories = async (id, body) => {
  await api.patch(`categories/${id}`, body);
};
