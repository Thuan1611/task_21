import { useForm } from "react-hook-form";
import React from "react";
import { registerAdmin } from "../../axios/authhhh";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const navi = useNavigate();

  const onSubmit = async (data) => {
    try {
      if (data.confirmPassword !== data.password) {
        alert("Mật khẩu không khớp");
        return;
      }
      const result = { ...data, role: "member" };
      await registerAdmin(result);
      delete data.confirmPassword;
      alert("Đăng kí thành công");
      navi("/auth/login");
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" {...register("email")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="text"
            className="form-control"
            {...register("password")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            {...register("confirmPassword")}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>
          Đã có tài khoản <Link to="/auth/login">Đăng nhập</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
