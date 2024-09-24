import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserList from "./UserList";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element:<HomePage />},
            {path:'users', element:<UsersPage />,
                children: [
                     {path:':id', element:<UserDetailPage />},

                ]
            },
        ]
    },
   

])


export default router;