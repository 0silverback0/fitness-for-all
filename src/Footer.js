import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@workoutoverload.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="index.html">Training</a></li>
              <li><a href="index.html">Nutrition</a></li>
              <li><a href="index.html">Recovery</a></li>
              <li><a href="index.html">Shop</a></li>
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
