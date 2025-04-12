import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CombineLayout from "./layouts/CombineLayouts";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import Category from "./pages/Category";
import Product from "./pages/Product";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CombineLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":name",
        element: <Category />,
      },
      {
        path: ":name/:slug",
        element: <Product />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
