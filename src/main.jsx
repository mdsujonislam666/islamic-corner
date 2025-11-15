import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from './LayOut/RootLayOut.jsx';
import Home from './Components/Home/Home.jsx';
import AllProducts from './Components/AllProducts/AllProducts.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Register from './Register/Register.jsx';
import MyProducts from './Components/MyProducts/MyProducts.jsx';
import MyRating from './Components/MyRating/MyRating.jsx';
import Login from './Login/Login.jsx';
import { ToastContainer } from 'react-toastify';
import AddProducts from './Components/AddProducts/AddProducts.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ErrorPage from './Components/Page/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'allProducts',
        Component: AllProducts,
        loader: () => fetch('http://localhost:4000/allProducts')
      },
      {
        path: 'productDetails/:id',
        loader: ({ params }) => fetch(`http://localhost:4000/products/${params.id}`),
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        )
      },
      {
        path: "updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:4000/products/${params.id}`)
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'myProducts',
        Component: MyProducts
      },
      {
        path: 'myRating',
        Component: MyRating
      },
      {
        path: 'addProduct',
        Component: AddProducts
      }
    ]
  },
  {
    path: "/*",
    Component: ErrorPage
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
