import React from 'react';
import './RelatedProducts.css';
import data_product from '../../assets/data';
import Item from '../item/item';

const RelatedProducts = () => {
    console.log(data_product);

    return (
        <div className="relatedproducts">
            <h1>related products</h1>
            <hr />
            <div className="relatedproducts-item">
                {/* Added parentheses for the map function */}
                {data_product.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
                {/* Closing div tag for the relatedproducts-item div */}
            </div>
        </div>
    );
};

export default RelatedProducts;
