import React from 'react'
import '../productDisplay/ProductDisplay.css'
import star_icon  from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'


const ProductDisplay = (props) => {
    const {product}=props;
    // console.log(typeof props.id);
  return (
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
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XLL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>category:</span>women,t-shirt,crop top</p>
                <p className='productdisplay-right-category'><span>tags:</span>modern,latest</p>

            </div>
        </div>
    )
}

export default ProductDisplay