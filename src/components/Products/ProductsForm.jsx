import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addProducts, listProductsDetail, updateProducts } from "../../axios/listProducts";


const ProductsForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEdit) {
      listProductsDetail(id).then((data) => reset(data));
    }
  }, [id, isEdit, reset]);

  const onSubmit = async (data) => {
    try {
      if (isEdit) {
        await updateProducts(id, data);
        alert("Cập nhật sản phẩm thành công!");
      } else {
        await addProducts(data);
        alert("Thêm sản phẩm thành công!");
      }
      navigate("/products");
    } catch (error) {
      alert("Có lỗi xảy ra!");
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="fw-bold mb-3 text-center">
        {isEdit ? "Sửa sản phẩm" : "Thêm sản phẩm"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            {...register("title", { required: "Title là bắt buộc" })}
          />
          {errors.title && (
            <p className="text-danger small">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            {...register("price", { required: "Giá không được bỏ trống" })}
          />
          {errors.price && (
            <p className="text-danger small">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Thumbnail URL</label>
          <input
            className="form-control"
            {...register("thumbnail", {
              required: "Thumbnail không được trống",
            })}
          />
          {errors.thumbnail && (
            <p className="text-danger small">{errors.thumbnail.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            {...register("stock", { required: "Stock không được trống" })}
          />
          {errors.stock && (
            <p className="text-danger small">{errors.stock.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Category ID</label>
          <input
            type="number"
            className="form-control"
            {...register("categoryId", { required: "Category Id là bắt buộc" })}
          />
          {errors.categoryId && (
            <p className="text-danger small">{errors.categoryId.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            {...register("description", { required: "Mô tả không được trống" })}
          ></textarea>
          {errors.description && (
            <p className="text-danger small">{errors.description.message}</p>
          )}
        </div>

        <button className="btn btn-primary w-100" type="submit">
          {isEdit ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
};
export default ProductsForm;
