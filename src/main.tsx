import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CombineLayout from "./layouts/CombineLayouts";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import Category from "./pages/Category";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CombineLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/:name",
        element: <Category />,
      },
      {
        path: "/:name/:slug",
        element: <Product />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
