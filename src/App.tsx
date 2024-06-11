import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from "./admin/user";
import GroundForm from "./admin/ground/Form.tsx";
import Home from "./home";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Ground from "./admin/ground";
import Login from "./login";
import Register from "./register";
import UserForm from "./admin/user/Form.tsx";
import Book from "./admin/book";
import Dashboard from "./admin/dashboard";
import UnAuthorized from "./admin/UnAuthorized.tsx";
import Admin from "./admin";


const queryClient = new QueryClient()


function App() {

    const privateRoute = [
        {path: '/admin', element: <Admin/>
            ,children:[
                {path: "/admin/ground", element: <Ground/>},
                {path: "/admin/ground/form", element: <GroundForm/>},
                {path: "/admin/user", element: <User/>},
                {path: "/admin/user/form", element: <UserForm/>},
                {path: "/admin/book", element: <Book/>},
                {path: "/admin/dashboard", element: <Dashboard/>},
            ]}
    ]
    const publicRoute = [
        {path: '/login', element: <Login/>},
        {path: '/register', element: <Register/>},
        {path: '', element: <Home/>},
        {path: "*", element: <UnAuthorized/>}
    ]

    // IS system has accesstoken or not?
    const isLoggedIn = true;

    return (
        <>
            <QueryClientProvider client={queryClient}>

                <RouterProvider router={
                    createBrowserRouter(
                        isLoggedIn ? privateRoute : publicRoute
                    )
                }/>
            </QueryClientProvider>
        </>
    )
}

export default App
