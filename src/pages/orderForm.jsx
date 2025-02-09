import {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from "../Header";
import "./style.css";

function OrderForm() {
    //Classes
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        number: "+1",
        address: "",
        city: "",
        state: "",
        zip: "",
        email: "",
        birthday: "",

    });
    const[situation, setSituation] = useState({
        size: "",
        crust: "",
        sauce: "",
        meat: "",
    })

    // use state functions to update the user input as it comes in
    // const [addedUser, confirmUser] = useState(false);
    // const [addedsituation, confirmSituation] = useState(false);
    const createUser = (type, currValue) =>{
        setUser({...user, [type]: currValue});
    };
    const createSituation = (type, currValue) =>{
        setSituation({...user, [type]: currValue});
    };

    // triggers when user presses add to cart
    const handleSubmit = () =>{
        console.log(user.firstName);
        console.log(user.lastName);
        console.log(user.number);
        console.log(user.address);
        console.log(user.city);
        console.log(user.state);
        console.log(user.zip);
        console.log(user.email);
        console.log(user.birthday);
        sessionStorage.setItem('User', JSON.stringify(user));
        sessionStorage.setItem('Situation', JSON.stringify(situation));

    };
    return (
        <>
            <div className="box-shift-down"></div>

            <div className="border-boxes ">

                <Header/>
                <div>
                    <h2>
                        Delivery Information
                    </h2>
                    {/*<li><Link to="/orderForm">order form</Link></li>*/}
                    {/*<li><Link to="/cart">cart</Link></li>*/}
                    {/*<li><Link to="/menu">menu</Link></li>*/}
                    {/*<li><Link to="/">home</Link></li>*/}
                </div>
                {/*HTML for the input form*/}
                <div>
                    <label>
                        Name:
                        <input
                            type="string"
                            value={user.firstName}
                            onChange={(e) => {
                                createUser('firstName', e.target.value)
                            }}
                        />
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
                        Phone number (US):
                        <input
                            type="string"
                            value={user.number}
                            onChange={(e) => {
                                createUser('number', e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>

                    </label>
                </div>

                <div>
                    <label>
                        Address:
                        <input
                            type="string"
                            value={user.address}
                            onChange={(e) => {
                                createUser('address', e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        city:
                        <input
                            type="string"
                            value={user.city}
                            onChange={(e) => {
                                createUser('city', e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        state:
                        <input
                            type="string"
                            value={user.state}
                            onChange={(e) => {
                                createUser('state', e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        zip:
                        <input
                            type="string"
                            value={user.zip}
                            onChange={(e) => {
                                createUser('zip', e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <br />Sign Up for Email Rewards!

                    </label>
                </div>
                <div>
                    <label>
                        email:
                        <input
                            type="string"
                            value={user.email}
                            maxLength={10}
                            onChange={(e) => {
                                createUser('email', e.target.value)
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
                {/*end of first box*/}


                <Link to="/cart">
                    <button onClick={handleSubmit}>
                        Add to Cart
                    </button>
                </Link>

            </div>
        </>
    // <div class="border-boxes">
    //
    // </div>


    );
}

export default OrderForm