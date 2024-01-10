import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Apex Mind Apex Body</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          
        <span className="material-symbols-outlined">
          stat_3
        </span>
          {/* <img style={ {height: '60px', width: '70px'}} src='/images/pplogo.png' alt='logo'></img> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item header-text"><a className="nav-link" href="/training">Training</a></li>
            <li className="nav-item header-text"><a className="nav-link" href="/nutrition">Nutrition</a></li>
            <li className="nav-item header-text"><a className="nav-link" href="/recovery">Recovery</a></li>
            <li className="nav-item header-text"><a className="nav-link" href="/mindset">Mindset</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
