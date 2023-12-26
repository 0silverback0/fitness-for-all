import React from 'react';
import  './App.css'

const Footer = () => {
  return (
    <footer className="footer mt-3 p-3 bg-dark" style={ {"color": "white"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@workoutoverload.com</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul  id="footer-links" style={ {"listStyle": "none"} }>
              <li><a href="/">Home</a></li>
              <li><a href="/training">Training</a></li>
              <li><a href="/nutrition">Nutrition</a></li>
              <li><a href="/recovery">Recovery</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <p>Stay connected on social media:</p>
            {/* Add social media icons or links here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
