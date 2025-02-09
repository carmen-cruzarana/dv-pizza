import { Link } from 'react-router-dom';
import "./style.css";
// import Header from "../Header";
import "../Header.css"
import logo from "/src/images/Medusa Logo.png"

function Home() {
    //const [count, setCount] = useState(0)
    return (
     <div>
        <nav class="nav">
                    <ul class="list">
                    <li class="logo">
                            <Link to="/">
                            <img src={logo} alt="Logo" className="nav-logo" />
                            </Link>
                        </li>
                        <li class="WebName"><Link to="/">DivineSlice</Link></li>
                        <li><Link to="/orderForm">Order</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </nav>
             
        <div className='flex flex-row h-svh'>
            {/* Left Column */}
            <div className='grow flex flex-col items-center'>
                <div>
                    <div class="box-shift-down">
                    {/* <img className="w-28 mx-auto" src="/src/assets/PizzaDoodle.png" width="100vw" />
                    <br /> */}
                    {/* <br/>
                    <br/>
                    <br/> */}
                    <img  
                    src="/src/assets/Pizza-promo.jpg" width={1000} height={300} />
                    <br />
                    <img className= "mx-auto" src="/src/assets/pizza-ad.jpg" width={300} height={300}/>
                    {/* <img  
                    src="https://img.freepik.com/free-vector/hand-drawn-pizza-horizontal-banner_23-2150266608.jpg" width={1000} height={300} /> */}
                </div>
                </div>
            </div>

            {/* Right Column */}
            <div>
                <br/>
                <br/>
                <br/>
                <div class="border-boxes">
                    <h1 style= {{color: "#881ec2"}}>Coupons</h1>
                    <p style= {{color: "#881ec2"}}> --------------------------------</p>
                    <p>Get 10% off your first order with coupon code: FIRST10</p>
                    <p>Get express delivery with coupon code : EXPRESS</p>
                </div>
                <div class="border-boxes">
                    <h2>Browse our menu</h2>
                    <p class="special-address">Click <Link to="/menu">here</Link> to see our menu</p>
                    <p>
                        Specials: <br />
                        Meat lovers $9.99 <br />
                        Veggie lovers $8.99 <br />
                        Cheese lovers $7.99 <br />
                    </p>
                    <p class="hidden-messages">We are here to help</p>
                </div>
                
                <div class="border-boxes">
                    <h2> 30-Minute Delivery Guaranteed</h2>
                    <p class="hidden-messages">Ask for express if needed sooner</p>
                </div>
               
                <div class="border-boxes">
                    <h2 style={{ fontSize: "24px" }}>Our Pizza</h2>
                    <p font-size="14px">
                        Allergen info <br />
                        Gluten Free warning
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
