// TrainingArticles.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainingArticles = () => {
  const [trainingArticles, setTrainingArticles] = useState([]);

  useEffect(() => {
    // Fetch training articles from your API
    axios.get('http://127.0.0.1:8000/api/articles/')
      .then(response => {
        setTrainingArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching training articles:', error);
      });
  }, [trainingArticles]);

  return (
    <div>
      <h1>Training Articles</h1>
      <ul>
        {trainingArticles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingArticles;
