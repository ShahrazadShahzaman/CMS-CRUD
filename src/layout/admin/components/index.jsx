import { Outlet } from "react-router-dom"
import { AdminContent } from "../admincontent"
import { AdminHeader } from "./adminheader"
import { Sidebar } from "./sidebar"

export const AdminDashboard =()=>{
    return (
        <>
        
        <AdminHeader/>
        <Sidebar/>
        <div className="main-content">
            <AdminContent/>
        </div> 
        </>
    )
}