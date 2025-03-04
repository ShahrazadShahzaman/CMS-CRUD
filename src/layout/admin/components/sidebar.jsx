import { Link, useNavigate } from "react-router-dom";
import { getAuth ,signOut } from "firebase/auth";
import "./dashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Sidebar = () => {
    const navigate = useNavigate();
    const auth = getAuth ();

    const handleLogout = async () => {
     try{
        await signOut(auth);
        toast.success("Logout successfully", {autoClose:2000});
        setTimeout(()=>{
          navigate("/signin");
        }, 2200);
    } catch (error){
        toast.error("Error Logging Out!")
     }
    }

return (
    <>
    <div className="Admin-sidebar">
        <aside className="aside-sidebar" aria-label="Admin Sidebar">
            <ul>
            <li>
                    <Link to="/" className="nav-link" >Frontend</Link>
                </li>
                <li>
                    <Link to="/admin/createfood" className="nav-link" >Create Food Menu</Link>
                </li>
                <li>
                    <Link to="/admin/viewfoods" className="nav-link" >View Food Menu</Link>
                </li>
            </ul>
            </aside>
            <div className="logout-container">
            <button className="logout-button" onClick={handleLogout} >Logout</button>
        </div>
    </div>
    </>   
  );
};