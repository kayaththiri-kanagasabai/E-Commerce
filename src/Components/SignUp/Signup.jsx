import React from "react";
import "./Signup.css";
import signupimg from "../../Components/Assets/signup/dl.beatsnoop 1.png";
import Header from "../Header/Header";
import SubHeader from "../subHeader/SubHeader";
import Footer from "../Footer/Footer";
import Google from "../../Components/Assets/signup/Icon-Google.png";


const Signup = () => {
  return (
    <div className="signup-import">
      <SubHeader />
      <Header />
      <div className="signup">
        {/* side image */}
        <div className="side-image">
          <img src={signupimg} alt="" />
        </div>

        {/* form */}
        <div className="signup-form">
          <h1>Create an account</h1>
          <h3>Enter your details below</h3>
          <h2></h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
            {/* buttons */}
            <button className="create-accout">Create Account</button>
            <button className="sign-with-google">
              {/* icon */}
              <img src={Google} alt="" className="google" />
              Sign up with Google
            </button>
          </form>
          <div className="login-meg">
            <h4>Already have account?</h4>
            <a href="#">Login</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
