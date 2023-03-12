import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/editInfo/:id',
            //     element: <EditModal></EditModal>,
            //     loader: ({params}) => fetch(`https://inventory-management-app-server.vercel.app/item/${params.id}`)
            // },
        ]
    }
])