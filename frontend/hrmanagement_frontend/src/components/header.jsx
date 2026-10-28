import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/adminlogin">Admin login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default Header;