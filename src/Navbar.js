import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Workout Overload</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          
          <img style={ {height: '30px', width: '30px'}} src='/images/recovery.png' alt='logo'></img>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/training">Training</a></li>
            <li className="nav-item"><a className="nav-link" href="/nutrition">Nutrition</a></li>
            <li className="nav-item"><a className="nav-link" href="#recovery">Recovery</a></li>
            <li className="nav-item"><a className="nav-link" href="#shop">Shop</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
