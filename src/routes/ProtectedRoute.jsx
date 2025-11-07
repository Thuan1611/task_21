import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navi = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user.role !== "admin") {
    return (
      <div>
        <p>Forbidden: You do not have access to this page</p>
        <button
          onClick={() => {
            localStorage.clear();
            alert("Đăng xuất thành công");
            navi("/products");
          }}
        >
          Trở về trang chủ
        </button>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
