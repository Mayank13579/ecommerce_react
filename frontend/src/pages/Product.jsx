import React ,{useContext} from 'react';
import {ShopContext}  from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
import all_products from '../assets/all_product';
import Breadcrum from '../components/Breadcrums/Breadcrum'
const Product = () => {
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));

  return (
    // <div>
    //     <Breadcrum product={product}/>
    //  <ProductDisplay product={product} />

    // </div>
    <div>
      {all_products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>New Price: ${product.new_price}</p>
          <p>Old Price: ${product.old_price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
