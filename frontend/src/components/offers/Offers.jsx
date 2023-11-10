import React from 'react'
import './Offers.css'
import exclusive_image from '../../assets/exclusive.jpg'

const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>ONLY ON BEST SELLERS PRODUCTS</h1>
            <button>check now</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers