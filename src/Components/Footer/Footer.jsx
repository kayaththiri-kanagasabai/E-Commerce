import React from 'react'
import './Footer.css'
import mail from "../../Components/Assets/Vector (9).png";
import QRcode from "../../Components/Assets/Qr Code.png";
import google from "../../Components/Assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import apple from "../../Components/Assets/download-appstore.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="exclusive">
        <h2>Exclusive</h2>
        <h3>Subscribe</h3>
        <h4>Get 10% off your first order</h4>
        <input type="email" placeholder="Enter your order" />
        <img src={mail} alt="" />
      </div>
      <div className="support">
        <h2>Support</h2>
        <h4>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h4>
        <h4>+88015-88888-9999</h4>
      </div>
      <div className="account">
        <h2>Account</h2>
        <h4>My Account</h4>
        <h4>Login / Register</h4>
        <h4>Cart</h4>
        <h4>Wishlist</h4>
        <h4>Shop</h4>
      </div>
      <div className="quicklink">
        <h2>Quick Link</h2>
        <h4>Privacy Policy</h4>
        <h4>Terms of use</h4>
        <h4>FAQ</h4>
        <h4>Contact</h4>
      </div>
      <div className="download">
        <h2>Download App</h2>
        <p>Save $3 with App New User Only</p>

        <div className="img1">
          <img src={QRcode} alt="" />
        </div>
        <div className="img2">
          <img src={google} alt="" />
          <img src={apple} alt="" />
        </div>
       
      </div>
    </div>
  );
}

export default Footer