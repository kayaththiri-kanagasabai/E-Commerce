import React from 'react'
import "./Headericons.css"
 import heart from "../../Components/Assets/header/Wishlist.png";
 import cart from "../../Components/Assets/header/Cart1 with buy.png";
 import User from "../../Components/Assets/header/user.png";

const Headericons = () => {
  return (
    <div className="header-icons">
       <div className="symbols">
          <img src={heart} alt="" />
          <img src={cart} alt="" />
          <img src={User} alt="" />
        </div> 
    </div>
  );
}

export default Headericons