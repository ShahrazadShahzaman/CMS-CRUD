import { Link } from "react-router-dom"
export const AdminContent =()=>{
    return (
        <>
        <div className="admin-container">
            <main className="admin-main">
                <div className="content-box large-box">
             <h2>Main Content</h2>
            <p>This is the main content area</p>
                </div>
            <div className="cms-section">
                <h3>Create new CMS Content</h3>
                <Link to="/pages/Admin/createfoods" className="btncms">Add new content</Link>
            </div>
            <div className="box-container">
                <div className="content-box small-box">Box 1</div>
                <div className="content-box small-box">Box 2</div>
                <div className="content-box small-box">Box 3</div>
            </div>
            </main>
        </div>
        </>
    )
}