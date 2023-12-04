import React from 'react';

const TrainingCarousel = () => {
  return (
    <section id='training' className="training-carousel">
      <div className="container">
      <h1 className="mt-5 mb-4">Training Resources</h1>

        {/* Summary Section */}
        <section className="summary">
        <p>
            Welcome to our training resources page! Here, you'll find valuable information and articles
            to help you enhance your training routine. Whether you're a beginner or an experienced athlete,
            our curated content covers a variety of topics to support your fitness journey.
        </p>
        </section>

        <div id="trainingCarousel" className="carousel slide" data-bs-ride="carousel">

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
          <button className="carousel-control-prev" type="button" data-bs-target="#trainingCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#trainingCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainingCarousel;
