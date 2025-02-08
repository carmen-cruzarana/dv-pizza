import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from "../Header";

function orderForm() {
    //Classes
    const [user, setUser] = useState({
        firstName: "Jane",
        lastName: "Doe",
        birthday: "MM/DD/YYYY",
        address1: "",
        address2: "",
        number: 1234567890,
    });
    const[situation, setSituation] = useState({
        severity: "",
        involvement: "",
        weapons: "",
        discretion: "",
    })
    // use state functions to update the user input as it comes in
    const [addedUser, confirmUser] = useState(false);
    const [addedsituation, confirmSituation] = useState(false);
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
        console.log(user.address1);
        console.log(user.address2);
        console.log(user.birthday);
        console.log(user.number);
        sessionStorage.setItem('User', user);
        sessionStorage.setItem('Situation', situation);

    };
    return (
        <>
            <Header/>
        </>

    );
}

export default orderForm