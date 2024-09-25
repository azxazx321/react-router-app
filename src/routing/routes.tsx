import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element:<HomePage />},
            {path:'/login', element:<LoginPage />},
           
        ]
    },
    {
        element: <PrivateRoute />,
        children: [
            {path:'users', element:<UsersPage />,
                children: [
                    {path:':id', element:<UserDetailPage />},

                ]
            },
        ]
    }
   

])


export default router;