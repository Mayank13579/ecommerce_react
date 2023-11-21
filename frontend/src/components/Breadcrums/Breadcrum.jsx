import React from 'react'
import arrow_icon from '../../assets/arrow2.png'
import '../Breadcrums/Breadcrum.css'

const Breadcrum = (props) => {
  const {product}=props;
  // console.log(arrow_icon);

  return (
        <div className="breadcrum">
          HOME  <img src={arrow_icon} alt="->" /> SHOP  <img src={arrow_icon} alt="->" />  {product.category}  <img src={arrow_icon} alt="->" />  {product.name}
        </div>
    )
}

export default Breadcrum

