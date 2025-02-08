import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header';

function Cart() {
    //const [count, setCount] = useState(0)
    const storedUser = JSON.parse(sessionStorage.getItem('User'));
    const storedSituation = JSON.parse(sessionStorage.getItem('Situation'));
    return (
        <>
            <Header/>
            <div>
                <p>
                   Delivery Information<br />{storedUser.firstName} {storedUser.lastName} <br /> {storedUser.number}<br />{storedUser.address1} <br />{storedUser.address2}
                </p>
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