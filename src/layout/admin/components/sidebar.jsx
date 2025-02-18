import { Link } from "react-router-dom";
import "./dashboard.css";
export const Sidebar = () => {
return (
    <>
    <div className="Admin-sidebar">
        <aside className="aside-sidebar">
            <ul>
            <li>
                    <Link to="/" className="nav-link" >Frontend</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link" >Create CMS</Link>
                </li>
            </ul>
            </aside>
            <div className="logout-container">
            <button className="logout-button" >Logout</button>
        </div>
    </div>
    </>    
  );
};