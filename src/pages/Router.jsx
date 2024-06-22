import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "./dashboard-layout/DashboardLayout.jsx";
import { Register } from "./register/Register.jsx";
import { Login } from "./login/Login.jsx";

import { Home } from "../pages/home/Home.jsx";
import { ContactUs } from "./contact-us/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
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
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
