import CategoryForm from "../components/Categories/CategoryForm";
import ListCategory from "../components/Categories/ListCategory";
import LayoutClient from "../layouts/LayoutClient";
import ProtectedRoute from "./ProtectedRoute";

const categoryRoutes = [
  {
    path: "/category",
    element: (
      <ProtectedRoute>
        <LayoutClient />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        Component: ListCategory,
      },
      {
        path: "/category/form",
        Component: CategoryForm,
      },
      {
        path: "/category/form/:id",
        Component: CategoryForm,
      },
    ],
  },
];
export default categoryRoutes;
