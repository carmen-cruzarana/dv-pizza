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
                <li class="title" title="People Involved">PIZZA CRUST</li>
                <li title="child involved">Thin Crust</li>
                <li title="multiple people">Stuffed Crust</li>
                <li title="one woman">Hand Tossed</li>
                <li>Deep Dish</li>
            </ul>
            <ul>
                <li class="title" title="severity">SIZE</li>
                <li title="Extremely Urgent">Extra Large</li>
                <li title="Urgent">Large</li>
                <li title="Threat">Medium</li>
                <li title="Standby">Small</li>
            </ul>
            <ul>
                <li class="title" title="discretion">SAUCE</li>
                <li title="no lights/sirens">Classic Red</li>
                <li title="ambulance">Alfredo</li>
                <li title="full lights/sirens">Pesto</li>
                <li>Spicy</li>
            </ul>
            <ul>
                <li class="title" title="weapons">MEAT/TOPPINGS</li>
                <li title="armed">Pepperoni</li>
                <li title="knife">Sausage</li>
                <li title="other">Chicken</li>
                <li title="no weapon">Veggie</li>
            </ul> 
        </div>
        </>

    );
}

export default Menu
// red, alfredo, pedto, spicy sauce
// crust, size,sauce,meat/toppings