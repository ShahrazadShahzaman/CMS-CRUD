import { AuthLayout } from "../layout/auth/layout"
import {UnprotectedRoute} from "../Routes/manage Protection/Unprotected"
import {Signin} from "../pages/Auth/signin"
import {Signup} from "../pages/Auth/signup"

export const AuthRoute= [
    {
        element:<UnprotectedRoute/>,
        children:[
            {
                path: "/signin",
                element:<Signin/>,
            },
            {
                path: "/signup",
                element:<Signup/>,
            }
        ]
    }
]