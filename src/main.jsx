import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./components/UsersPage/UsersPage";
import EditPage from "./components/EditPage/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UsersPage />,
    loader: () => fetch("http://localhost:3000/users"),
  },
  {
    path: "/users/:id",
    element: <EditPage />,
    loader: (params) => fetch(`http://localhost:3000/users/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
