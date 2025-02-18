import { createBrowserRouter } from "react-router-dom";
import { FrontendRoute } from "./frontend";
import { AdminRoute } from "./admin";
import { AuthRoute } from "./auth";
import "./Frontend assets/css/style.css"
export const appRoutes=createBrowserRouter ([...FrontendRoute,...AdminRoute,...AuthRoute])