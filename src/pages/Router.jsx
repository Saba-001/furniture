// router.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "./dashboard-layout/DashboardLayout.jsx";
import { Register } from "./register/Register.jsx";
import { Login } from "./login/Login.jsx";

import { Products } from "../pages/products/Products.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/",
          element: <Products />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  { basename: import.meta.env.VITE_BASE_URL || "/" }
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
