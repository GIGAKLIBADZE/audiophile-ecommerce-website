import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CombineLayout from "./layouts/CombineLayouts";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import CategoriesHeadPhones from "./pages/CategoryHeadphones";

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
        element: <CategoriesHeadPhones />,
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
