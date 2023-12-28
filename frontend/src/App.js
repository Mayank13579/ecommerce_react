import React  from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import LoginSignup from './pages/LoginSignup'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Footer from './components/footer/Footer'
import men_banner from '../src/assets/banner_mens.png'
import women_banner from '../src/assets/banner_women.png'
import kid_banner from '../src/assets/banner_kids.png'
import ShopContextProvider from './Context/ShopContext';
import UserAccount from './pages/Useraccount'
import Checkout from './pages/checkout';
function App() {
  return (
    <>
 
      <BrowserRouter>
      <ShopContextProvider>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
    <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
    <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
    <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/> 
    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>
    <Route path='/user' element={<UserAccount/>}/>
    <Route path='/checkout' element={<Checkout/>}/>



    </Routes>
    <Footer/>
    </ShopContextProvider>
    </BrowserRouter>

    </>
  );
}

export default App;
