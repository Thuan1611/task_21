import { createBrowserRouter, RouterProvider } from "react-router-dom";
import clientRoutes from "./clientRoutes";
import NotFound from "../components/NotFound";
import authRoutes from "./authRoutes";
import categoryRoutes from "./categoryRoutes";

const router = createBrowserRouter([
  ...clientRoutes,
  ...categoryRoutes,
  ...authRoutes,
  { path: "*", Component: NotFound },
]);
const AppRoute = () => {
  return <RouterProvider router={router} />;
};
export default AppRoute;
