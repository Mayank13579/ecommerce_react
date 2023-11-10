import React from 'react'
import './item.css'
const Item = (props) => {
  return (
    <div className='Item'>
<img src={props.image} alt="" />
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