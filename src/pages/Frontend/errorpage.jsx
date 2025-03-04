import { Link } from "react-router-dom";
import "./errorpage.css";
export const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
          >Back To Home</Link>
        </div>
    </>
  );
};
