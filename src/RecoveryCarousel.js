import React from 'react';

const RecoveryCarousel = () => {
  return (
    <div id="recovery" className="container">
      <h1 className="mt-5 mb-4">Recovery Resources</h1>

      {/* Summary Section */}
      <section  className="summary">
        <p>
          Explore our recovery resources to find articles and tips that can aid in your recovery journey. Whether you're focused on rest, relaxation, or specific recovery techniques, we've got information to support you.
        </p>
      </section>

      {/* Recovery Carousel Section */}
      <section className="recovery-carousel">
        <div id="recovery-carousel" className="carousel slide" data-bs-ride="carousel">

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#recovery-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#recovery-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#recovery-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            {/* Recovery Item 1 */}
            <div className="carousel-item active">
              <img src="images/recovery.png" className="d-block w-100" style={{ objectFit: 'cover', height: '500px' }} alt="Recovery Item 1" />
            </div>

            {/* Recovery Item 2 */}
            <div className="carousel-item">
              <img src="images/recovery2.png" className="d-block w-100" style={{ objectFit: 'cover', height: '500px' }} alt="Recovery Item 2" />
            </div>

            {/* Recovery Item 3 */}
            <div className="carousel-item">
              <img src="images/eat-healthy.png" className="d-block w-100" style={{ objectFit: 'cover', height: '500px' }} alt="Recovery Item 3" />
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#recovery-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#recovery-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Additional Recovery Articles or Sections */}
      {/* Add more sections or components for individual recovery articles as needed */}
    </div>
  );
};

export default RecoveryCarousel;
