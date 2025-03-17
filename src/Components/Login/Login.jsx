import React from 'react'
import "./Login.css"
import signupimg from "../../Components/Assets/signup/dl.beatsnoop 1.png";
import Header from "../Header/Header";
import SubHeader from "../subHeader/SubHeader";
import Footer from "../Footer/Footer";
import Google from "../../Components/Assets/signup/Icon-Google.png";

const Login = () => {
  return (
    <div className="login-import">
      <SubHeader />
      <Header />
      <div className="log-in">
        <div className="signup">
          {/* side image */}
          <div className="side-image">
            <img src={signupimg} alt="" />
          </div>

          {/* form */}
          <div className="login-form">
            <h1>Log in to Exclusive</h1>
            <h3>Enter your details below</h3>
            <h2></h2>
            <form>
              <input type="email" placeholder="Email or Phone Number" />
              <input type="password" placeholder="Password" />
              {/* buttons */}
              <div class="container">
                <button>Log In</button>
                <a href="#">Forget Password?</a>
              </div>
             
            </form>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login