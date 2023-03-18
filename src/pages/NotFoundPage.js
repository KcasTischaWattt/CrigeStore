import { Link } from "react-router-dom"
import "../cssStyles/NotFound.css"; // Import the CSS file
import logo from "../pictures/logo.png"

function NotFoundPage() {
    return (
        <>
         <div className="not-found">
      <h1>404</h1>
      <p>We're sorry, the page you are looking for cannot be found.</p>
      <div className="img-container">
        <img src={logo} alt="404 Not Found" />
      </div>
      <a href="/main" className="btn">
        Return to Home
      </a>
    </div>
        </>
    )
}

export default NotFoundPage