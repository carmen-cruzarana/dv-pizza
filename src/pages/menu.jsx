import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Header from "../Header";
import crust from "../Images/crust.jpg";
import pizza from "../Images/pizza.svg";
import marinara from "../Images/red.jpg";
import pepperoni from "../Images/pepperoni.jpg";
import stuffedCrust from "../Images/stuffed.jpg";


import "../menu.css"


function Menu() {
    //const [count, setCount] = useState(0)
    return (
        <>
        <Header/>
        <div class="image-row">
            <ul>
                <li class="title">PIZZA CRUST</li>
                <li>Thin Crust</li>
                <li>Stuffed Crust</li>
                <li>Thick Crust</li>
                <li>Hand Tossed</li>
            </ul>
            <ul>
                <li class="title">SIZE</li>
                <li>Extra Large</li>
                <li>Large</li>
                <li>Medium</li>
                <li>Small</li>
            </ul>
            <ul>
                <li class="title">SAUCE</li>
                <li>Red</li>
                <li>Alfredo</li>
                <li>Pesto</li>
                <li>SPicy</li>
            </ul>
            <ul>
                <li class="title">MEAT/TOPPINGS</li>
                <li>Pepperoni</li>
                <li>Sausage</li>
                <li>Chicken</li>
                <li>Veggie</li>
            </ul> 
        </div>
        </>

    );
}

export default Menu
// red, alfredo, pedto, spicy sauce
// crust, size,sauce,meat/toppings