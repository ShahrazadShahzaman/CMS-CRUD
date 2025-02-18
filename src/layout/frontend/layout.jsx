import { Outlet } from "react-router-dom";
import { Header } from "./Header/header";
import { Footer } from "./footer/footer";

export const FrontendLayout=()=>{
return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
);
};