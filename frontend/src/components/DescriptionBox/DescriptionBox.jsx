import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, itaque et nam inventore, molestias amet laboriosam dolor impedit facere quaerat repellendus officia quia hic harum ea quo. Laboriosam, ad dignissimos.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis praesentium architecto quae commodi cum? Corporis pariatur possimus reprehenderit numquam.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox