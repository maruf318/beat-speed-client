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
        loader: ({ params }) =>
          fetch(
            `https://beat-speed-server-oneni1put-maruf-hossains-projects-1d89c107.vercel.app/car/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://beat-speed-server-oneni1put-maruf-hossains-projects-1d89c107.vercel.app/car/${params.id}`
          ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://beat-speed-server-oneni1put-maruf-hossains-projects-1d89c107.vercel.app/cart"
          ),
      },
      {
        path: "/brand/:brand_name",
        element: <Brand></Brand>,
        loader: ({ params }) =>
          fetch(
            `https://beat-speed-server-oneni1put-maruf-hossains-projects-1d89c107.vercel.app/brand/${params.brand_name}`
          ),
      },
    ],
  },
]);

export default router;
