import { Link } from 'react-router-dom';
import "./Header.css"
import logo from "./images/Medusa Logo.png"

function Header(){

    return(
        <>
        <nav class="nav">
            <ul class="list">
            <li class="logo">
                    <Link to="/">
                    <img src={logo} alt="Logo" className="nav-logo" />
                    </Link>
                </li>
                <li class="WebName"><Link to="/">DivineSlice</Link></li>
                <li><Link to="/orderForm">Order</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
        </>
    );
    
}

export default Header