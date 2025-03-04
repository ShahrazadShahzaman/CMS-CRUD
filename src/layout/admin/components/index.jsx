import { Outlet } from "react-router-dom";
import { AdminContent } from "./admincontent";
import { AdminHeader } from "./adminheader";
import { Sidebar } from "./sidebar";
import { useLocation } from "react-router-dom";

export const AdminDashboard = () => {
  const location = useLocation();
  return (
    <>
      <div className="admin-layout">
        <Sidebar />
        <div className="main-area">
          <AdminHeader />
          <div className="main-content">
            {location.pathname === "/admin" && <AdminContent />}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
