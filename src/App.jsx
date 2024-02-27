import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  Landing,
  About,
  Login,
  Register,
  Products,
  SingleProduct,
  Cart,
  OrdersHistory,
  Error,
  Checkout,
  ControlProducts,
  ControlUsers,
  UpdateProduct,
  CreateProduct,
} from "./pages";

//actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as updateProductAction } from "./pages/UpdateProduct";
import { action as createProductAction } from "./pages/CreateProduct";

import { store } from "./store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <OrdersHistory />,
      },
      {
        path: "control-products",
        element: <ControlProducts />,
      },
      {
        path: "control-products/:id",
        element: <UpdateProduct />,
        errorElement: <Error />,
        action: updateProductAction(),
      },
      {
        path: "control-products/createProduct",
        element: <CreateProduct />,
        errorElement: <Error />,
        action: createProductAction,
      },
      {
        path: "control-users",
        element: <ControlUsers />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
