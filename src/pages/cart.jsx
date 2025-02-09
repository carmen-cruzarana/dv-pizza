import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header';
import "./style.css";
import "../App.css";

function Cart() {
    //const [count, setCount] = useState(0)

    const storedUser = JSON.parse(sessionStorage.getItem('User'));
    const storedSituation = JSON.parse(sessionStorage.getItem('Situation'));
    const handlePurchase = () =>{
        console.log("submitted");
        let recipient = "+19547039237";
        let message = convertMessage();
        var url = "https://wa.me/" + recipient + "?text=" + message;
    }
    function getCurrentDate() {
        const date = new Date();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    }
    function convertMessage(){
        let message = "";
        if (storedUser || storedSituation){
            message = "DV Report " +  getCurrentDate() + " \n";
            message+= "Victim " + storedUser.firstName + storedUser.lastName + " (DOB: " + storedUser.birthday + ") \n";
            message+= "Situation Severity: ";
            if (storedSituation.size == "Small"){
                message += "Standby\n";
            }
            else if (storedSituation.size == "Medium"){
                message += "Threat\n";
            }
            else if (storedSituation.size == "Large"){
                message+= "Urgent\n";
            }
            else if (storedSituation.size == "XL"){
                message += "Extremely Urgent\n";
            }
            message += "People Involved: ";
            if (storedSituation.crust == "Hand-Tossed"){
                message += "One Woman\n";
            }
            else if (storedSituation.crust == "Stuffed"){
                message += "Multiple People\n";
            }
            else if (storedSituation.crust == "Thin"){
                message+= "Child or Children\n";
            }
            message += "Weapons Known: ";
            if (storedSituation.meat == "Pepperoni"){
                message += "Armed \n";
            }
            else if (storedSituation.meat == "Sausage"){
                message += "Knife \n";
            }
            else if (storedSituation.meat == "Chicken"){
                message+= "Other\n";
            }
            else if (storedSituation.meat == "Veggie" || storedSituation.meat == ""){
                message+= "None Specified \n";
            }
            message += "Discretion Desired: ";
            if (storedSituation.sauce == "Classic Red"){
                message += "No Lights/Sirens \n";
            }
            else if (storedSituation.sauce == "Alfredo"){
                message += "Ambulance \n";
            }
            else if (storedSituation.sauce== "Pesto"){
                message+= "Full Lights/Sirens \n";
            }
            else if (storedSituation.sauce== "Spicy"){
                message+= "None Specified \n";
            }
        }
        console.log(message);
        return message;
    }


    return (
        <>
            <Header />
            <h1 style={{
                margin:'100px auto',
                paddingLeft:'50px',
                marginBottom:'20px',
                fontFamily: 'cursive'
            }}> My Cart </h1>
            {!storedUser || !storedSituation ? <p>&emsp;&emsp;&emsp;&emsp;Nothing currently in cart! </p> :
            <div style={{
                width: '30vw',
                height: '70vh',
                border: '5px solid #008080',
                padding: '30px',
                margin: '50px',
                boxSizing: 'border-box',
                position: 'relative',
                backgroundColor: 'lightblue',
                color: 'black',
                fontFamily: 'cursive'
            }}>
                    <h2 style={{
                        fontSize: '1.3em',
                        fontWeight: 'bold'
                    }}>
                        Delivery Information<br/>
                    </h2>
                    <p>{storedUser?.firstName} {storedUser?.lastName} <br/> {storedUser?.number}<br/> {storedUser?.address}
                        <br/>{storedUser?.city}, {storedUser?.state}, {storedUser?.zip}<br/><br/>
                    </p>
                    <h2 style={{
                        fontSize: '1.3em',
                        fontWeight: 'bold'
                    }}>
                    Order Details:<br/>
                    </h2>
                <p>  {storedSituation?.size && '1 ' + storedSituation?.size + ' Divine Pizza'}  <br />
                    {storedSituation?.crust} <br/> {storedSituation?.sauce}<br/> {storedSituation?.meat}
                </p>
                <button onClick={handlePurchase} style={{
                    backgroundColor: '#881ec2',
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
        }

        </>

    );
}

export default Cart