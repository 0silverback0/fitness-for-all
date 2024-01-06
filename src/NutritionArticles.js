import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga'

const NutritionArticles = () => {
  useEffect(() => {
    console.log('Tracking page view:', window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const [nutritionArticles, setNutritionArticles] = useState([]);

  useEffect(() => {
    axios.get('https://marz.pythonanywhere.com/api/articles')
      .then(response => {
        const nutritionArticles = response.data.filter(article => article.category === 'nutrition');
        setNutritionArticles(nutritionArticles);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  

  return (
    <div>
      <h1 className='text-center font'>Nutrition Articles</h1>
      <div className='container'>
        <div className="row">
          {nutritionArticles.map(article => (
            <div className='col-md-4 m-2' key={article.id}>
              <div className='card'>
                <img src={article.image} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title header-text">{article.title}</h5>
                  <i style={ {'color': '#0d6efd', 'fontSize': '12px'}}>published <span>{article.date}</span></i>
                  <p className="card-text">{article.description.substring(0, 100)}...</p>
                  
                  <button
                    id={article.id}
                    className="btn btn-primary"
                  >
                    <Link style={ {'color': 'white', 'textDecoration': 'none'} } to={`/articles/${article.id}`}>Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionArticles;
