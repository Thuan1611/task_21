import { Component } from "react";
import LayoutClient from "../layouts/LayoutClient";
import ListProducts from "../components/Products/ListProducts";
import ProtectedRoute from "./ProtectedRoute";
import ProductsForm from "../components/Products/ProductsForm";

const clientRoutes = [
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <LayoutClient />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        Component: ListProducts,
      },
      {
        path: "form",
        Component: ProductsForm,
      },
      {
        path: "form/:id",
        Component: ProductsForm,
      },
    ],
  },
];
export default clientRoutes;
