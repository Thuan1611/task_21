import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCategories, listCategoriesData } from "../../axios/listCategory";
import api from "../../axios/api";

const ListCategory = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const data = await listCategoriesData();
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const { data: products } = await api.get(`products?categoryId=${id}`);
    console.log(products);

    if (products.length > 0) {
      return alert("Không thể xoá! Danh mục đang chứa sản phẩm.");
    }

    if (confirm("Xác nhận xoá danh mục này?")) {
      await deleteCategories(id);
      alert("Xoá thành công");
      fetchData();
    }
  };
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h3 className="fw-bold mb-3">Quản lý danh mục</h3>
        <Link to="/category/form" className="btn btn-primary">
          Thêm danh mục
        </Link>
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Tên danh mục</th>
            <th>Slug</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.slug}</td>
              <td>
                <Link
                  to={`/category/form/${item.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Sửa
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategory;
