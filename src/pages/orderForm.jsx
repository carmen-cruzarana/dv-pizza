import {useEffect, useState} from 'react'
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

    const [situation, setSituation] = useState({
        crust: "",
        sauce: "",
        size: "",
        meat: {
            Peperoni: false,
            Sausage: false,
            Chicken: false,
            Veggie: false
        }
    })


    const createUser = (type, currValue) =>{
        setUser({...user, [type]: currValue});
    };

    const handleSubmit = () =>{
        console.log("Situation", situation)
        sessionStorage.setItem('User', JSON.stringify(user));
        sessionStorage.setItem('Situation', JSON.stringify(situation));

    };

    return (
        <>

            <div   className="box-shift-down"></div>

            <div className="border-boxes ">

                <Header/>
                <div>
                    <h1>
                        Delivery Information
                    </h1>
                    <br />
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
                    <h1>
                        Customize Your Order
                    </h1>
                    <br />
                </div>

                <div>
                    <div>


                        <label>
                            Size: &ensp;Small&nbsp;
                            <input
                                type="radio"
                                value={"Small"}
                                checked = {situation.size === "Small"}
                                onChange={(e) => {

                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            size: "Small"
                                        }))
                                    }
                                }}
                            />
                        </label>
                        <label>
                            &ensp;Medium&nbsp;
                            <input
                                type="radio"
                                value={"Medium"}
                                checked ={situation.size === "Medium"}
                                onChange={(e) => {

                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            size: "Medium"
                                        }))
                                    }
                                }}
                            />
                        </label>
                        <label>
                            &ensp;Large&nbsp;
                            <input
                                //
                                type="radio"
                                value={"Large"}
                                checked = {situation.size === "Large"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            size: "Large"
                                        }))
                                    }
                                }}
                            />
                        </label>
                        <label>
                            &ensp;XL&nbsp;
                            <input
                                // Size: small, medium, large, xl (radio)
                                type="radio"
                                value={"XL"}
                                checked = {situation.size === "XL"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            size: "XL"
                                        }))
                                    }
                                }}
                            />
                        </label>
                    </div>
            {/*crust*/}
                    <div>
                        <label>
                            Crust: &ensp;Hand-Tossed&nbsp;
                            <input
                                // crust: Hand-Tossed, Thin, Stuffed (radio)
                                type="radio"
                                value={"Hand-Tossed"}
                                checked ={situation.crust === "Hand-Tossed"}
                                onChange={(e) => {

                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            crust: "Hand-Tossed"
                                        }))
                                    }
                                }}
                            />
                        </label>

                        <label>
                            &ensp;Thin&nbsp;
                            <input
                                type="radio"
                                value={"Thin"}
                                checked ={situation.crust === "Thin"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            crust: "Thin"
                                        }))
                                    }
                                }}
                            />
                        </label>

                        <label>
                            &ensp;Stuffed&nbsp;
                            <input
                                type="radio"
                                value={"Stuffed"}
                                checked = {situation.crust === "Stuffed"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            size: "Stuffed"
                                        }))
                                    }
                                }}
                            />
                        </label>
                    </div>
                    {/*sauce*/}
                    <div>
                        <label>
                            Sauce:&ensp;Classic Red&nbsp;
                            <input
                                type="radio"
                                value={"Classic Red"}
                                checked ={situation.sauce === "Classic Red"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            sauce: "Classic Red"
                                        }))
                                    }
                                }}
                            />
                        </label>
                        <label>
                            &ensp;Pesto&nbsp;
                            <input
                                type="radio"
                                value={"Pesto"}
                                checked ={situation.sauce === "Pesto"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            sauce: "Pesto"
                                        }))
                                    }
                                }}
                            />
                        </label>
                        <label>
                            &ensp;Alfredo&nbsp;
                            <input
                                type="radio"
                                value={"Alfredo"}
                                checked = {situation.sauce === "Alfredo"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            sauce: "Alfredo"
                                        }))
                                    }
                                }}
                            />
                        </label>
                        <label>
                            &ensp;Spicy&nbsp;
                            <input
                                type="radio"
                                value={"Spicy"}
                                checked = {situation.sauce === "Spicy"}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSituation((prev) => ({
                                            ...prev,
                                            sauce: "Spicy"
                                        }))
                                    }
                                }}
                            />
                        </label>
                    </div>
                    {/*meat*/}

                    <div>
                        <label>
                            Meat:&ensp;Peperoni&nbsp;
                            <input type="checkbox"
                                   value={"Peperoni"}
                                   checked = {situation.meat.Peperoni}
                                   onChange={(e) => {
                                           setSituation((prev) => ({
                                               ...prev,
                                               meat: {
                                                   ...prev.meat,
                                                   Peperoni: e.target.checked
                                               }
                                           }))
                                   }}/>
                        </label>
                        <label>
                            &ensp;Sausage&nbsp;
                            <input type="checkbox"
                                   value={"Sausage"}
                                   checked = {situation.meat.Sausage}
                                   onChange={(e) => {
                                       setSituation((prev) => ({
                                           ...prev,
                                           meat: {
                                               ...prev.meat,
                                               Sausage: e.target.checked
                                           }
                                       }))
                                   }}/>
                        </label>
                        <label>
                            &ensp;Chicken&nbsp;
                            <input type="checkbox"
                                   value={"Chicken"}
                                   checked = {situation.meat.Chicken}
                                   onChange={(e) => {
                                       setSituation((prev) => ({
                                           ...prev,
                                           meat: {
                                               ...prev.meat,
                                               Chicken: e.target.checked
                                           }
                                       }))
                                   }}/>
                        </label>
                        <label>
                            &ensp;Veggie&nbsp;
                            <input type="checkbox"
                                   value={"Veggie "}
                                   checked = {situation.meat.Veggie }
                                   onChange={(e) => {
                                       setSituation((prev) => ({
                                           ...prev,
                                           meat: {
                                               ...prev.meat,
                                               Veggie: e.target.checked
                                           }
                                       }))
                                   }}/>
                        </label>
                    </div>
                </div>
                <br />

                <Link to="/cart">
                    <button onClick={handleSubmit}>
                        Add to Cart
                    </button>
                </Link>

            </div>
</>)
            }

