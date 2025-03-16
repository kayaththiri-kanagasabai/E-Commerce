import React from 'react'

import vector from "../../Components/Assets/Vector.png";



const subHeader = () => {
  return (
    <div className="sub-header">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <h5>ShopNow</h5>
      <div className="english">
        <h5>
          English <img src={vector} alt="" />
        </h5>
      </div>
    </div>
  );
}

export default subHeader;