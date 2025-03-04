import { createBrowserRouter } from "react-router-dom";
import { FrontendRoute } from "./frontend";
import { AdminRoute } from "./admin";
import { AuthRoute } from "./auth";
import "./Frontend assets/css/style.css"
import { ErrorPage } from "../pages/Frontend/errorpage";
export const appRoutes=createBrowserRouter ([...FrontendRoute,...AdminRoute,...AuthRoute,{path:"*",element:<ErrorPage/>}])
