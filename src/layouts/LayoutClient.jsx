import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutClient = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutClient;
