import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from "./user";
import Form from "./ground/Form.tsx";
import Home from "./home";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Ground from "./ground";

const queryClient = new QueryClient()


function App() {

    return (
        <>
            <QueryClientProvider client={queryClient}>

                <RouterProvider router={
                    createBrowserRouter(
                        [
                            {path: "", element: <Home/>},
                            {
                                path: "/user",
                                element: <User/>
                            },

                            {
                                path: "/user/add",
                                element: <Form/>
                            },
                            {path:'/ground',element:<Ground/>},
                            {path:'/ground/form',element:<Form/>},
                            {path:'/ground/form/:id',element:<Form/>},

                        ]
                    )
                }/>
            </QueryClientProvider>
        </>
    )
}

export default App
