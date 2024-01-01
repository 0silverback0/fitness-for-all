import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NutritionArticles = () => {
  const [nutritionArticles, setNutritionArticles] = useState([]);

  useEffect(() => {
    // Fetch all articles from your API
    axios.get('https://marz.pythonanywhere.com/api/articles')
      .then(response => {
        // Filter articles that have the category "nutrition"
        const nutritionArticles = response.data.filter(article => article.category === 'nutrition');
        setNutritionArticles(nutritionArticles);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

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
                  {/* Add more details if needed */}
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
