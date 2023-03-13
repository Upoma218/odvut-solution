import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layouts/Main";
import AddProducts from "../AddProducts/AddProducts";
import Login from "../Login/Login";
import Register from "../Login/Register";
import ManageProducts from "../ManageProducts/ManageProducts";
import Products from "../Products/Products";
import UpdateInfo from "../UpdateInfo/UpdateInfo";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/addProducts',
                element:<AddProducts></AddProducts>

            },
            {
                path: '/manageProducts',
                element:<ManageProducts></ManageProducts>,
                loader: () => fetch('http://localhost:5000/products')

            },
            {
                path: '/editInfo/:id',
                element: <UpdateInfo></UpdateInfo>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            
        ]
    }
])