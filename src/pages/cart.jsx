import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Cart() {
    //const [count, setCount] = useState(0)
    const storedUser = JSON.parse(sessionStorage.getItem('User'));
    const storedSituation = JSON.parse(sessionStorage.getItem('Situation'));
    return (
        <>
            <div>
                <p>
                    My Cart
                </p>
                <li><Link to="/orderForm">order form</Link></li>
                <li><Link to="/cart">cart</Link></li>
                <li><Link to="/menu">menu</Link></li>
                <li><Link to="/">home</Link></li>
            </div>
            <div>
                <p>
                   Delivery Information<br />{storedUser.firstName} {storedUser.lastName} <br /> {storedUser.number}<br />{storedUser.address1} <br />{storedUser.address2}
                </p>
            </div>
        </>

    );
}

export default Cart