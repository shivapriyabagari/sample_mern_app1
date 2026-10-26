import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/adminlogin">Admin Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    ) 
}
export default Header;