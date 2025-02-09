import {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from "../Header";
import "./style.css";

export default function OrderForm() {
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
        meat: false,
    })


    const createUser = (type, currValue) =>{
        setUser({...user, [type]: currValue});
    };
    const createSituation = (type, currValue) =>{
        setSituation({...user, [type]: currValue});
    };

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
        createSituation('size', pizzaSize);
        createSituation('crust', pizzaCrust);
        createSituation('sauce', pizzaSauce);
        createSituation('meat', meatType);
        sessionStorage.setItem('User', JSON.stringify(user));
        sessionStorage.setItem('Situation', JSON.stringify(situation));

    };

    const [pizzaSize, setPizzaSize] = useState()

    const [pizzaCrust, setPizzaCrust] = useState()

    const [pizzaSauce, setPizzaSauce] = useState()

    const [meatType,setMeatType] = useState({
        Peperoni: false,
        Sausage: false,
        Chicken: false,
        Veggie: false
    })

    return (
        <>

            <div   className="box-shift-down"></div>

            <div className="border-boxes">

                <Header/>
                <div>
                    <h2>
                        Delivery Information
                    </h2>

                </div>

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
        </div>
            <div className="border-boxes">
                <div>
                    <h2>
                        Customize Your Order
                    </h2>
                </div>

                <div>
                    <div>
                        <label>
                            Small
                            <input
                                type="radio"
                                value={"small"}
                                checked ={pizzaSize == "small"}
                                onChange={(e) => {

                                    setPizzaSize("small")
                                }}
                            />
                        </label>
                        <label>
                            Medium
                            <input
                                type="radio"
                                value={"medium"}
                                checked ={pizzaSize == "medium"}
                                onChange={(e) => {
                                    setPizzaSize("medium")
                                }}
                            />
                        </label>
                        <label>
                            Large
                            <input
                                //
                                type="radio"
                                value={"large"}
                                checked = {pizzaSize == "large"}
                                onChange={(e) => {
                                    setPizzaSize("large")
                                }}
                            />
                        </label>
                        <label>
                            XL
                            <input
                                // Size: small, medium, large, xl (radio)
                                type="radio"
                                value={"XL"}
                                checked = {pizzaSize == "XL"}
                                onChange={(e) => {
                                    setPizzaSize("XL")
                                }}
                            />
                        </label>
                    </div>
            {/*crust*/}
                    <div>
                        <label>
                            Hand-Tossed
                            <input
                                // crust: Hand-Tossed, Thin, Stuffed (radio)
                                type="radio"
                                value={"Hand-Tossed"}
                                checked ={pizzaCrust == "Hand-Tossed"}
                                onChange={(e) => {

                                    setPizzaCrust("Hand-Tossed")
                                }}
                            />
                        </label>

                        <label>
                            Thin
                            <input
                                type="radio"
                                value={"Thin"}
                                checked ={pizzaCrust == "Thin"}
                                onChange={(e) => {
                                    setPizzaCrust("Thin")
                                }}
                            />
                        </label>

                        <label>
                            Stuffed
                            <input
                                type="radio"
                                value={"Stuffed"}
                                checked = {pizzaCrust == "Stuffed"}
                                onChange={(e) => {
                                    setPizzaCrust("Stuffed")
                                }}
                            />
                        </label>
                    </div>
                    {/*sauce*/}
                    <div>
                        <label>
                            Classic Red
                            <input
                                type="radio"
                                value={"Classic Red"}
                                checked ={pizzaSauce == "Classic Red"}
                                onChange={(e) => {
                                    setPizzaSauce("Classic Red")
                                }}
                            />
                        </label>
                        <label>
                            Pesto
                            <input
                                type="radio"
                                value={"Pesto"}
                                checked ={pizzaSauce == "Pesto"}
                                onChange={(e) => {
                                    setPizzaSauce("Pesto")
                                }}
                            />
                        </label>
                        <label>
                            Alfredo
                            <input
                                type="radio"
                                value={"Alfredo"}
                                checked = {pizzaSauce == "Alfredo"}
                                onChange={(e) => {
                                    setPizzaSauce("Alfredo")
                                }}
                            />
                        </label>
                        <label>
                            Spicy
                            <input
                                type="radio"
                                value={"Spicy"}
                                checked = {pizzaSauce == "Spicy"}
                                onChange={(e) => {
                                    setPizzaSauce("Spicy")
                                }}
                            />
                        </label>
                    </div>
                    {/*meat*/}

                    <div>
                        <label>
                            Peperoni
                            <input type="checkbox"
                                   value={"Peperoni"}
                                   checked = {meatType.Peperoni}
                                   onChange={(e) => {
                                       setMeatType({
                                           ...meatType,
                                           Peperoni: e.target.checked
                                       })
                                   }}/>
                        </label>
                        <label>
                            Sausage
                            <input type="checkbox"
                                   value={"Sausage"}
                                   checked = {meatType.Sausage}
                                   onChange={(e) => {
                                       setMeatType({
                                           ...meatType,
                                           Sausage: e.target.checked
                                       })
                                   }}/>
                        </label>
                        <label>
                            Chicken
                            <input type="checkbox"
                                   value={"Chicken"}
                                   checked = {meatType.Chicken}
                                   onChange={(e) => {
                                       setMeatType({
                                           ...meatType,
                                           Chicken: e.target.checked
                                       })
                                   }}/>
                        </label>
                        <label>
                            Veggie
                            <input type="checkbox"
                                   value={"Veggie "}
                                   checked = {meatType.Veggie }
                                   onChange={(e) => {
                                       setMeatType({
                                           ...meatType,
                                           Veggie : e.target.checked
                                       })
                                   }}/>
                        </label>
                    </div>
                </div>

                <Link to="/cart">
                    <button onClick={handleSubmit}>
                        Add to Cart
                    </button>
                </Link>

            </div>
</>)
            }

