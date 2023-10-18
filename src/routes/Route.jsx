import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../components/Error";
import Brand from "../pages/Brand";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";
import Update from "../pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/car/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.id}`),
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/brand/:brand_name",
        element: <Brand></Brand>,
        loader: () => fetch("http://localhost:5000/cars"),
      },
    ],
  },
]);

export default router;
