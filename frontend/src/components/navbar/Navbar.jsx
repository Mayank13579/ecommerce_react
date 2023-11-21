import React from 'react'
import {Link} from 'react-router-dom'
import '../navbar/Navbar.css'
const Navbar = () => {
  return (
    <div className='main'>
        <div className='heading'>
            <img src="" alt="" />
            <h1>SHOPPERS</h1>
        </div>
        <div className='sub-section'>
            <li><Link to='/'>SHOP</Link></li>
            <li><Link to='/men'>MEN</Link></li>
            <li><Link to='/women'>WOMEN</Link></li>
            <li><Link to='/kid'>KIDS</Link></li>
        </div>
        <div className='login'>
            <button className='login-btn'><Link to='/login'>Login</Link></button>
            <Link to='/cart'><i  className="fa-solid fa-cart-shopping"></i></Link> 
            {/* <div className='nav-cart-count'>0</div> */}
        </div>
    </div>
  )
}

export default Navbar