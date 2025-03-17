import React from 'react'
import "./Header.css";
// import heart from "../../Components/Assets/header/Wishlist.png";
// import cart from "../../Components/Assets/header/Cart1 with buy.png";
// import User from "../../Components/Assets/header/user.png";

const Header = () => {
  return (
    <div className="out-header">
      <div className="header">
        <h4>
          <b>Exclusive</b>
        </h4>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </nav>
        <div className="search-bar">
          <input
            type="search"
            placeholder="What are you loocking for?       🔍︎"
          />
        </div>
        {/* <div className="symbols">
          <img src={heart} alt="" />
          <img src={cart} alt="" />
          <img src={User} alt="" />
        </div> */}
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Header;