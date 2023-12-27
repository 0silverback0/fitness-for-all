import React from 'react';

const FeaturedCarousel = () => {
  return (
    <section className="featured-carousel">
      <div className="container">
        <h2 className="section-title text-center font">Featured Items</h2>
        <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel">

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
          {/* Featured Item 1 */}
          <div className="carousel-item active" style={{ height: '500px' }}>
          <a href='/articles/1'>
            <img
              src="images/recovery2.png"
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              alt="Featured Ebook"
            />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>New Ebook</h5>
              <p>Discover our latest ebook for a healthier you!</p>
              
            </div>
          </div>

            {/* Featured Item 2 */}
          <div className="carousel-item" style={{ height: '500px' }}>
            <img
              src="images/eat-healthy.png"
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              alt="Featured Workout Program"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Workout Program</h5>
              <p>Revolutionize your fitness routine with our new workout program.</p>
            </div>
          </div>

          {/* Featured Item 3 */}
          <div className="carousel-item" style={{ height: '500px' }}>
            <img
              src="images/advantages-of-pushups.png"
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              alt="Featured Supplement"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Supplement Launch</h5>
              <p>Boost your performance with our latest supplement.</p>
            </div>
          </div>

          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
