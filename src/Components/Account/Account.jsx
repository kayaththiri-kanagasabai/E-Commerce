import React from 'react'
import './Account.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SubHeader from '../subHeader/subHeader';
import '../../Components/subHeader/subHeader.css';
import '../../Components/Header/Header.css';
import '../../Components/Footer/Footer.css';



const Account = () => {
  return (
    <div className="account">
      <SubHeader />
      <Header />
      <div className="bar">
        <h5>Home </h5>
        <h4>/</h4>
        <h4>Account</h4>
      </div>
       <div className='account-content'>
        <h1>photo</h1>
        <h1>photo</h1>
        <h1>photo</h1>
        <h1>photo</h1>
       </div>
      <Footer />
    </div>
  );
}

export default Account