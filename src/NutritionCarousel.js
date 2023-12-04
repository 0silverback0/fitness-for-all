import React from 'react';

const NutritionCarousel = () => {
  return (
    <div id="nutrition" className="container">
      <h1 className="mt-5 mb-4">Nutrition Resources</h1>

      {/* Summary Section */}
      <section  className="summary">
        <p>
          Explore our nutrition resources to discover valuable information and articles
          that can help you maintain a balanced and healthy diet. Whether you're looking
          for dietary tips, recipes, or nutritional insights, we've got you covered!
        </p>
      </section>

      {/* Nutrition Carousel Section */}
      <section className="nutrition-carousel">
        {/* Your Nutrition Carousel Component Goes Here */}

        <div id="nutrition-carousel" className="carousel slide" data-bs-ride="carousel">

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#trainingCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#trainingCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#trainingCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            {/* Training Item 1 */}
            <div className="carousel-item active">
              <img src="images/advantages-of-pushups.png" className="d-block w-100" style={{ objectFit: 'cover', height: '500px' }} alt="Training Item 1" />
            </div>

            {/* Training Item 2 */}
            <div className="carousel-item">
              <img src="images/eat-healthy.png" className="d-block w-100" style={{ objectFit: 'cover', height: '500px' }} alt="Training Item 2" />
            </div>

            {/* Training Item 3 */}
            <div className="carousel-item">
              <img src="images/recovery2.png" className="d-block w-100" style={{ objectFit: 'cover', height: '500px' }} alt="Training Item 3" />
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#nutrition-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#nutrition-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Additional Nutrition Articles or Sections */}
      {/* Add more sections or components for individual nutrition articles as needed */}
    </div>
  );
};

export default NutritionCarousel;
