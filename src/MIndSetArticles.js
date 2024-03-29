import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga'
import ResponsiveImage from './ResponsiveImage';

const MindSetArticles = () => {
  const [psychArticles, setpsychArticles] = useState([]);

  useEffect(() => {
    axios.get('https://marz.pythonanywhere.com/api/articles')
      .then(response => {
        const psychArticles = response.data.filter(article => article.category === 'mindset');
        setpsychArticles(psychArticles);
      })
      .catch(error => {
        console.error('Error fetching psych articles:', error);
      });
  }, []); 

  useEffect(() => {
    console.log('Tracking page view:', window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <h1 className='text-center font'>Mindset</h1>
      <div className='container'>
        <div className="row justify-content-center text-center">
          {psychArticles.map(article => (
            <div className='col-md-4 m-2' key={article.id}>
              <div className='card'>
                {/* <img src={article.image} className="card-img-top" alt={article.title} /> */}
                <ResponsiveImage originalImageUrl={article.image} />
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

export default MindSetArticles;
