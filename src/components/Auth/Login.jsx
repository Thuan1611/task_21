import { useForm } from "react-hook-form";
import { loginAdmin } from "../../axios/authhhh";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navi = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await loginAdmin(data);
      console.log(res)
      alert("Đăng nhập thành công");
      localStorage.setItem("user",JSON.stringify(res.data.data.user))
      localStorage.setItem("token",res.data.data.accessToken);
      navi("/products");
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
            type="password"
            className="form-control"
            {...register("password")}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
