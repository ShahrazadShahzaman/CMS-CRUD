import { Link } from "react-router-dom"
export const AdminContent =()=>{
    return (
        <>
        <div className="admin-container">
            <main className="admin-main">
                <div className="content-box large-box">
             <h2 className="Main-heading">Welcome Admin!!</h2>
            <p>This is the Admin Dashboard</p>
                </div>
            <div className="cms-section">
                <h3>Create new CMS Content</h3>
                <Link to="/admin/createfood/${FoodId}" className="btncms">
                <button className="cms-btn">Add New Food Data</button>
                </Link>
            </div>
            <div className="box-wrapper">
                <div className="box">Box 1</div>
                <div className="box">Box 2</div>
                <div className="box">Box 3</div>
            </div>
            </main>
        </div>
        </>
    )
}