import React from 'react'
import './Errorpage.css';
import Header from '../Header/Header';
import SubHeader from '../subHeader/subHeader';
import Footer from '../Footer/Footer';



const Errorpage = () => {
  return (
    <div className="error-page">
      {/* import subheader,header */}
      <SubHeader />
      <Header />

      <div className="bar">
        <h5>Home </h5>
        <h4>/</h4>
        <h4>404 Error</h4>
      </div>
      {/* center part */}
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <div className="btn">
        <center>
          <button>Back to home page</button>
        </center>
      </div>
      {/* import footer section */}
      <Footer/>
    </div>
  );
}

export default Errorpage;