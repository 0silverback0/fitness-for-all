import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecoveryArticles = () => {
  const [recoveryArticles, setRecoveryArticles] = useState([]);

  useEffect(() => {
    // Fetch all articles from your API
    axios.get('https://marz.pythonanywhere.com/api/articles')
      .then(response => {
        // Filter articles that have the category "recovery"
        const recoveryArticles = response.data.filter(article => article.category === 'recovery');
        setRecoveryArticles(recoveryArticles);
      })
      .catch(error => {
        console.error('Error fetching recovery articles:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div>
      <h1 className='text-center'>Recovery Articles</h1>
      <div className='container'>
        <div className="row">
          {recoveryArticles.map(article => (
            <div className='col-md-4' key={article.id}>
              <div className='card'>
                <img src={article.image} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  {/* Add more details if needed */}
                  <button
                    id={article.id}
                    className="btn btn-primary"
                  >
                    <Link style={ {'color': 'white'} } to={`/articles/${article.id}`}>Read More</Link>
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

export default RecoveryArticles;
