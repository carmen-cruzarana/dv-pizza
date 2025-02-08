import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header';

function Cart() {
    //const [count, setCount] = useState(0)
    const storedUser = JSON.parse(sessionStorage.getItem('User'));
    //const storedSituation = JSON.parse(sessionStorage.getItem('Situation'));
    return (
        <>
            <Header />
            <h1 style={{
                margin:'100px auto',
                paddingLeft:'50px',
                marginBottom:'20px'
            }}> My Cart </h1>
            <div style={{
                width: '30vw',
                height: '70vh',
                border: '6px solid black',
                padding: '30px',
                margin: '50px',
                boxSizing: 'border-box',
                position: 'relative',
            }}>
                <h2>
                    Delivery Information<br/>
                </h2>
                <p>
                    {storedUser.firstName} {storedUser.lastName} <br/> {storedUser.number}<br/>{storedUser.address1}
                    <br/>{storedUser.address2}
                </p>
                <h2>
                    Order Details:<br/>
                </h2>
                <p>
                    Extra Large <br />Stuffed Crust <br/> Red Sauce<br/> Pepperoni, Sausage, Bacon
                </p>
                <button onClick={(handlePurchase) => {}} style={{
                    backgroundColor: 'red',
                    color: 'white',
                    alignContent: 'center',
                    position: 'absolute',
                    left: '50%',
                    bottom: '10px',
                    transform:'translateX(-50%)'
                }}>
                    Order Pizza
                </button>
            </div>
        </>

    );
}

export default Cart