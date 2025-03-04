import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import { Navigate, Outlet } from 'react-router-dom'
import "./protection.css"

export const ProtectedRoute = () => {
    const [user,loading]=useAuthState(auth)
    console.log(user)
    if (loading){
        return (
        <>
            <div className="loading-container">
        <div className='loader spin'>
        </div>
        <div className="loading">
            Loading...
        </div>
        </div>
        </>
        )
    }
    return user ? <Outlet /> : <Navigate to="/signin" />
    }