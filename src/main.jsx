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
import Contact from './Components/Contact/Contact.jsx';
import DashboarLayout from './LayOut/DashboardLayout.jsx';
import DashboarHome from './Components/Dashboard/DashboarHome.jsx'

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
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/allProducts`)
      },
      {
        path: 'productDetails/:id',
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${params.id}`),
        element: (
          
            <ProductDetails></ProductDetails>
          
        )
      },
      {
        path: "updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${params.id}`)
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
        path: 'addProduct',
        Component: AddProducts
      },
      {
        path: 'contact',
        Component: Contact
      }
    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute><DashboarLayout></DashboarLayout></PrivateRoute>,
    children:[
      {
        path: 'dashboarHome',
        Component: DashboarHome
      },
      {
        path: 'myProducts',
        Component: MyProducts
      },
      {
        path: 'myRating',
        Component: MyRating
      },
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
