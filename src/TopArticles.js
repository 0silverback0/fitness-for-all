import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://marz.pythonanywhere.com/api/articles')
      .then(response => {
        const topArticles = response.data.filter(article => article.top_article === true);
        setArticles(topArticles);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <section className="top-articles">
      <div className="container">
        <h2 className="section-title text-center font m-3">Top Articles</h2>
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-md-4">
              <div className="card mb-3">
              <img src={`${article.image}`} className="card-img-top" alt={`${article.title}`} />
                <div className="card-body">
                  <h5 className="card-title header-text">{article.title}</h5>
                  <i style={ {'color': '#0d6efd', 'fontSize': '12px'}}>published <span>{article.date}</span></i>
                  <p className="card-text" >{article.description.substring(0, 100)}...</p>
                  <button
                    id={article.id}
                    className="btn btn-primary mb-3"
                  >
                    <Link style={ {'color': 'white', 'textDecoration': 'none', 'border': 'none'} } to={`/articles/${article.id}`}>Read More</Link>
                  </button>
                </div>
        
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArticles;