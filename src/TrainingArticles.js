import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TrainingArticles = () => {
  const [trainingArticles, setTrainingArticles] = useState([]);

  useEffect(() => {
    // Fetch all articles from your API
    axios.get('https://marz.pythonanywhere.com/api/articles')
      .then(response => {
        // Filter articles that have the category "training"
        const trainingArticles = response.data.filter(article => article.category === 'training');
        setTrainingArticles(trainingArticles);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div>
      <h1 className='text-center font'>Training Articles</h1>
      <div className='container'>
        <div className="row">
          {trainingArticles.map(article => (
            <div className='col-md-4' key={article.id}>
              <div className='card'>
                <img src={article.image} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text" >{article.description}</p>
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

export default TrainingArticles;
