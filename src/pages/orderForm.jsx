import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function orderForm() {
    //const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <p>
                    order form
                </p>
                <li><Link to="/orderForm">order form</Link></li>
                <li><Link to="/cart">cart</Link></li>
                <li><Link to="/menu">menu</Link></li>
                <li><Link to="/">home</Link></li>
            </div>
        </>

    );
}

export default orderForm