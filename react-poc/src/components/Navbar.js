import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/cart" >Cart</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;