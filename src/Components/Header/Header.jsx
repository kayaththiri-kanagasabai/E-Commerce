import React from 'react'
import "./Header.css";
import Headericons from '../Headericons/Headericons';
import SubHeader from "../subHeader/SubHeader";



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
            placeholder=" What are you loocking for?       🔍︎"
          />
        </div>
        <Headericons />
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Header;