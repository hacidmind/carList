
import "./Navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <ul>
                
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/Example">Example</Link></li>
                <li><Link to="/addblog">Add Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">FAQ</Link> </li>
            </ul>
        </div>
    );
}

export default Navbar;
