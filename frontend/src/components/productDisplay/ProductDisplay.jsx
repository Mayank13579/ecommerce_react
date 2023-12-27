import React, { useState, useContext } from 'react'
import '../productDisplay/ProductDisplay.css'
import star_icon  from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import CartItems from '../CartItems/CartItems'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
    const [selectedSize,setselectedSize]=useState(null);
    const datatopass=selectedSize;
    // console.log(datatopass);
    const sizechange=(e)=>{
        setselectedSize(e.target.value)
    }
    

  return (
  <>
    <div>    
        <CartItems passdata={datatopass}/>
    </div>
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    a loightweight ussually knitted shirt pullover.
                </div>
                <div className="productdisplay-right-size">
                    <h1>select size</h1>
                    <div className="productdisplay-right-size">
                    <label>
        <input
          type="radio"
          name="size"
          value="S"
          checked={selectedSize === 'S'}
          onChange={sizechange}
        />
        S
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="M"
          checked={selectedSize === 'M'}
          onChange={sizechange}
        />
        M
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="L"
          checked={selectedSize === 'L'}
          onChange={sizechange}
        />
        L
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="XL"
          checked={selectedSize === 'XL'}
          onChange={sizechange}
        />
        XL
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="XXL"
          checked={selectedSize === 'XXL'}
          onChange={sizechange}
        />
        XXL
      </label>
      {/* <p>size selected  {selectedSize}</p> */}
                    </div>

                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO Cart</button>
                <p className='productdisplay-right-category'><span>category:</span>women,t-shirt,crop top</p>
                <p className='productdisplay-right-category'><span>tags:</span>modern,latest</p>

            </div>
        </div>
        </>
        )
}

export default ProductDisplay