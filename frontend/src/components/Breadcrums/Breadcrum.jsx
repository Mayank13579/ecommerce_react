import React from 'react'
import arrow_icon from '../../assets/arrow.png'
import '../Breadcrums/Breadcrum.css'

const Breadcrum = (props) => {
  const {product}=props;

  return (
        <div className="breadcrum">
          HOME  <img src={arrow_icon} alt="" /> SHOP  <img src={arrow_icon} alt="" />  {product.category}  <img src={arrow_icon} alt="" />  {product.name}
        </div>
    )
}

export default Breadcrum

// import React from 'react';
// import arrow_icon from '../../assets/arrow.png';
// import '../Breadcrums/Breadcrum.css';

// const Breadcrum = (props) => {
//   const { product } = props;

//   // Check if 'product' and its 'category' and 'name' properties exist
//   if (!product || !product.category || !product.name) {
//     // Handle the case where the object or properties are undefined
//     return null; // or display a default breadcrumb, or an error message
//   }

//   return (
//     <div className="breadcrum">
//       HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category}{' '}
//       <img src={arrow_icon} alt="" /> {product.name}
//     </div>
//   );
// };

// export default Breadcrum;
