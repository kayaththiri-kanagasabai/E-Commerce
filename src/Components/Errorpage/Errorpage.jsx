import React from 'react'
import './Errorpage.css'

const Errorpage = () => {
  return (
    <div className="error-page">
      <div className="bar">
        <h5>Home </h5>
        <h4>/</h4>
        <h4>404 Error</h4>
      </div>

      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <div className="btn">
        <center>
          <button>Back to home page</button>
        </center>
      </div>
    </div>
  );
}

export default Errorpage