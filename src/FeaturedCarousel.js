import React from 'react';

const FeaturedCarousel = () => {
  return (
    <section className="featured-carousel">
      <div className="container">
        <h2 className="section-title text-center font">Featured Items</h2>
        <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#featuredCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" >
              <a href='/articles/3'>
              <img
                srcSet="images/300x120.webp 300w,
                images/700x270.webp 700w,
                images/1300x500.webp 1300w"
                sizes="(max-width: 576px) 300px,
                (max-width: 992px) 700px,
                1300px"
                src="images/Rubik-Distressed.webp"
                className="d-block w-100 img-fluid"
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                alt="Featured Ebook"
              />
              </a>
            </div>

            <div className="carousel-item">
              <img
                src="images/Rubik-Distressed-_1_.webp"
                className="d-block w-100 img-fluid" 
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                alt="Featured Workout Program"
              />
            </div>

            <div className="carousel-item">
              <a href='/articles/8'>
              <img
                src="images/protein.webp"
                className="d-block w-100 img-fluid"
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                alt="Featured Supplement"
              />
              </a>
            </div>

          </div>

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
