import { AuthLayout } from "../layout/auth/layout"
import {Signin} from "../pages/Auth/signin"

export const AuthRoute= [
    {
        element:<AuthLayout/>,
        children:[
            {
                path: "/signin",
                element:<Signin/>,
            }
        ]
    }
]