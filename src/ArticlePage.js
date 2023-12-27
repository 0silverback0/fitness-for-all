import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

  return (
    <div>
      {article ? (
        <div className='container' maxwidth={'80%'}>
          <h2 className='text-center font'>{article.title}</h2>
          <img className="img-fluid" src={`/${article.image}`} alt=''  width={'100%'} height={'500px'}/>
          {/* <p>{article.text}</p> */}
         
          <div className='mt-3' dangerouslySetInnerHTML={{ __html: article.text }}></div>
          {/* Add more details as needed */}
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;
