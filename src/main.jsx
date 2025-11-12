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
        Component: AllProducts
      },
      {
        path: 'productDetails/:id',
        loader: ({params}) => fetch(`http://localhost:4000/products/${params.id}`),
        Component: ProductDetails
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component:Register
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
        path: 'addProducts',
        Component: AddProducts
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
