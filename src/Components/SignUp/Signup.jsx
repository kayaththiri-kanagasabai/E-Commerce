import React from 'react'
import signupimg from "../../Components/Assets/Side Image.png";

const Signup = () => {
  return (
    <div className="signup">
      <h1>hi</h1>
      <img src={signupimg} alt="" />
      <div className="signup-form">
        <h1>Create an account</h1>
        <h2></h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup