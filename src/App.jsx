import React from "react";
import SubHeader from "./Components/subHeader/subHeader";
import Header from "./Components/Header/Header";
import Errorpage from "./Components/Errorpage/Errorpage";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
     
      <SubHeader />
      <Header/>
      <Errorpage/>
      <Footer/>
    </div>
  );
};

export default App;
