import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='Item'>
<Link to={`/product/${props.id}`} ><img src={props.image} alt="" /></Link>
<p>{props.name}</p>
<div className="Item-prices">
<div className="Item-prices-new">
${props.new_price}
</div>
<div className="Item-prices-old">
${props.old_price}
</div>

</div>

    </div>
  )
}

export default Item