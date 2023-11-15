import React ,{useContext} from 'react';
// import {ShopContext}  from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ShopContextProvider from '../Context/ShopContext';
import ProductDisplay from '../components/productDisplay/ProductDisplay';

const Product = () => {
    const {all_product}=useContext(ShopContextProvider);
    const {productId}=useParams();
  
    const product=all_product.find((e)=>e.id===Number(productId));
    console.log('knfe');

  return (
    <div>
        <Breadcrum product={product}/>
     <ProductDisplay product={product} />

    </div>
    // <div>
    //   {all_product.map(product => (
    //     <div key={product.id}>
    //       <img src={product.image} alt={product.name} />
    //       <h3>{product.name}</h3>
    //       <p>Category: {product.category}</p>
    //       <p>New Price: ${product.new_price}</p>
    //       <p>Old Price: ${product.old_price}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Product;
