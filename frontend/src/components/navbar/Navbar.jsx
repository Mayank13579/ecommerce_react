import React from 'react'
import {Link} from 'react-router-dom'
import '../navbar/Navbar.css'
const Navbar = () => {
  return (
    <div className='main'>
        <div className='heading'>
            <img src="" alt="" />
            <h1>shoppers</h1>
        </div>
        <div className='sub-section'>
            <li><Link to='/'>shop</Link></li>
            <li><Link to='/men'>men</Link></li>
            <li><Link to='/women'>women</Link></li>
            <li><Link to='/kid'>kids</Link></li>
        </div>
        <div className='login'>
            <button className='login-btn'><Link to='/login'>Login</Link></button>
            <Link to='/cart'><i  class="fa-solid fa-cart-shopping"></i></Link> 
            {/* <div className='nav-cart-count'>0</div> */}
        </div>
    </div>
  )
}

export default Navbar