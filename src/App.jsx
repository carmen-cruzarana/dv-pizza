import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import OrderForm from './pages/orderForm'
import Menu from './pages/menu'
import Cart from './pages/cart'



function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/orderForm" element={<OrderForm/>} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
      </>

  );
}

export default App
