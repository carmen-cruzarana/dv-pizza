import { Link } from 'react-router-dom';
import "./style.css";
import Header from '../Header';

function Home() {
    //const [count, setCount] = useState(0)
    return (
    <>
        <Header />
        <div className='h-[100vh]'>
            <div className='flex flex-col'>
                {/* Header */}
            
                {/* Content */}
                <div className='flex flex-row'>
                    {/* Left Column */}
                    <div className='grow'>
                        <img src="/src/assets/PizzaDoodle.png" className='w-20' />
                        <img class="image" src="https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emElMjBzbGljZXxlbnwwfHwwfHx8MA%3D%3D" className='w-sm' />
                    </div>

                    {/* Right Column */}
                    <div className='grow'>
                        <div class="border-boxes">
                            <h2>Coupons</h2>
                            <p>Get 10% off your first order with coupon code: FIRST10</p>
                            <p>Get express delivery with coupon code : EXPRESS</p>
                        </div>

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
                
            </div>
         </div>
    </div>
        </div>
    </>

    );
}

export default Home;
