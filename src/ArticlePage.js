import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactGA from 'react-ga';
import ResponsiveImage from './ResponsiveImage';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://marz.pythonanywhere.com/api/articles/article/${id}`);
        setArticle(response.data);
        
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  useEffect(() => {
    console.log('Tracking page view:', window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [id]);

  return (
    <div>
      {article ? (
        <div className='container' maxwidth={'80%'}>
          <h2 className='text-center font'>{article.title}</h2>
          <ResponsiveImage originalImageUrl={article.image} />         
          <div className='mt-3' dangerouslySetInnerHTML={{ __html: article.text }}></div>
          
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;
