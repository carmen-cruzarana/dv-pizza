import {useState} from 'react'
import { Link } from 'react-router-dom'
// import Header from "../Header";

function OrderForm() {
    //Classes
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        address1: "",
        address2: "",
        number: "+1",
    });
    const[situation, setSituation] = useState({
        severity: "",
        involvement: "",
        weapons: "",
        discretion: "",
    })
    // use state functions to update the user input as it comes in
    // const [addedUser, confirmUser] = useState(false);
    // const [addedsituation, confirmSituation] = useState(false);
    const createUser = (type, currValue) =>{
        setUser({...user, [type]: currValue});
    };
    // const createSituation = (type, currValue) =>{
    //     setSituation({...user, [type]: currValue});
    // };

    // triggers when user presses add to cart
    const handleSubmit = () =>{
        console.log(user.firstName);
        console.log(user.lastName);
        console.log(user.address1);
        console.log(user.address2);
        console.log(user.birthday);
        console.log(user.number);
        sessionStorage.setItem('User', JSON.stringify(user));
        sessionStorage.setItem('Situation', JSON.stringify(situation));

    };
    return (
        <>
            {/* <Header /> */}
            <div>
                <p className = "text-4xl font-bold line-height: 500" >
                    Order Form: Delivery
                </p>
                {/*<li><Link to="/orderForm">order form</Link></li>*/}
                {/*<li><Link to="/cart">cart</Link></li>*/}
                {/*<li><Link to="/menu">menu</Link></li>*/}
                {/*<li><Link to="/">home</Link></li>*/}
            </div>
            {/*HTML for the input form*/}
            <div>
                <label>
                    First Name:
                    <input
                        type="string"
                        value={user.firstName}
                        onChange={(e) => {
                            createUser('firstName', e.target.value)
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Last Name:
                    <input
                        type="string"
                        value={user.lastName}
                        onChange={(e) => {
                            createUser('lastName', e.target.value)
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Birthday:
                    <input
                        type="string"
                        value={user.birthday}
                        maxLength={10}
                        onChange={(e) => {
                            createUser('birthday', e.target.value)
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Address line 1:
                    <input
                        type="string"
                        value={user.address1}
                        onChange={(e) => {
                            createUser('address1', e.target.value)
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Address line 2:
                    <input
                        type="string"
                        value={user.address2}
                        onChange={(e) => {
                            createUser('address2', e.target.value)
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Phone number:
                    <input
                        type="string"
                        value={user.number}
                        onChange={(e) => {
                            createUser('number', e.target.value)
                        }}
                    />
                </label>
            </div>
            <Link to="/cart">
                <button onClick={handleSubmit}>
                Add to Cart
                </button>
            </Link>
        </>

    );
}

export default OrderForm