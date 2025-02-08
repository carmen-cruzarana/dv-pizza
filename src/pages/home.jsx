import { Link } from 'react-router-dom';
import "./style.css";
import Header from '../Header';

function Home() {
    //const [count, setCount] = useState(0)
    return (
        <div>
            <div className='flex flex-col'>
                {/* Header */}
            
                {/* Content */}
                <div className='flex flex-row'>
                    {/* Left Column */}
                    <div className='grow flex flex-col items-center'>
                        <div>
                       <img className= "w-28 mx-auto" src="/src/assets/PizzaDoodle.png" width="100vw"/> 
                        <br/>
                        <img src="https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emElMjBzbGljZXxlbnwwfHwwfHx8MA%3D%3D" width={1000} height={666.66} />
                        <br/>
                       
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div class="border-boxes">
                            <h1>Coupons</h1>
                            <p> --------------------------------</p>
                            <p>Get 10% off your first order with coupon code: FIRST10</p>
                            <p>Get express delivery with coupon code : EXPRESS</p>
                        </div>
                        <br/>
                        <div class="border-boxes">
                            <h2>Browse our menu</h2>
                            <p>Click <Link to="/menu">here</Link> to see our menu</p>
                            <p>
                                Specials: <br/>
                                Meat lovers $9.99 <br/>
                                Veggie lovers $8.99 <br/>
                                Cheese lovers $7.99 <br/>
                            </p>
                            <p class="hidden-messages">We are here to help</p>
                        </div>
                        <br/>
                        <div class="border-boxes">
                            <h2> 30-Minute Delivery Guaranteed</h2>
                            <p class="hidden-messages">Ask for express if needed sooner</p>
                        </div>
                        <br/>
                        <div class="border-boxes">
                            <h2> Our Pizza</h2>
                            <p font-size ="14px">
                                Allergen info <br/>
                            Gluten Free warning
                            </p>
                        </div>
                
            </div>
         </div>
    </div>
        </div>

    );
}

export default Home;
