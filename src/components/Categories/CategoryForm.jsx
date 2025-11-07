import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { addCategories, listCategoriesDetail, updateCategories } from "../../axios/listCategory";

const CategoryForm = () =>{
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEdit) {
      listCategoriesDetail(id).then((data) => reset(data));
    }
  }, [id, isEdit, reset]);

  const onSubmit = async (data) => {
    if (isEdit) {
      await updateCategories(id, data);
      alert("Cập nhật thành công!");
    } else {
      await addCategories(data);
      alert("Thêm danh mục thành công!");
    }
    navigate("/category");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h3 className="fw-bold mb-3 text-center">
        {isEdit ? "Sửa danh mục" : "Thêm danh mục"}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
          <input
            className="form-control"
            {...register("title", { required: "Không được để trống" })}
          />
          {errors.title && <p className="text-danger small">{errors.title.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Slug</label>
          <input
            className="form-control"
            {...register("slug", { required: "Slug là bắt buộc" })}
          />
          {errors.slug && <p className="text-danger small">{errors.slug.message}</p>}
        </div>

        <button className="btn btn-success w-100" type="submit">
          {isEdit ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
}
export default CategoryForm