import LayoutAdmin from "../layouts/LayoutAdmin";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ProtectedRoute from "./ProtectedRoute";

const authRoutes = [
  {
    path: "/auth",
    element: <LayoutAdmin />,
    children: [
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
];
export default authRoutes;
