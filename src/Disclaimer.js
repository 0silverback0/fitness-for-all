import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const Disclaimer = () => {
  // Initialize Google Analytics with your tracking code
  useEffect(() => {
    ReactGA.initialize('G-GXQLQ87K9N');
    
    // Track page view when the component mounts
    console.log('disclaimer mounted')
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="container disclaimer">
      <h3 className='text-center font'>Disclaimer</h3>
      <p>
        The information provided on this website is for general informational purposes only.
        It is not intended to be a substitute for professional fitness or nutrition advice.
        Always seek the advice of your physician or other qualified health provider with any
        questions you may have regarding a medical condition. Never disregard professional
        medical advice or delay in seeking it because of something you have read on this website.
      </p>
      <p>
        This website may contain affiliate links, which means we may earn a small commission
        if you make a purchase through these links. This comes at no additional cost to you and
        helps support the maintenance of this site. Your support is greatly appreciated.
      </p>
    </div>
  );
};

export default Disclaimer;

