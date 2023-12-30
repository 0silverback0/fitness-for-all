import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchBar.css'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSearch = () => {
    if (searchTerm) {
      axios.get(`https://marz.pythonanywhere.com/api/articles/search?title=${searchTerm}`)
        .then(response => {
          setSearchResults(response.data.articles);
          setFormSubmitted(true);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    } else {
      setSearchResults([]);
      setFormSubmitted(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleListItemClick = (e) => {
    e.stopPropagation()
    const searchResults = document.querySelector('.search-results');
  if (searchResults) {
    searchResults.classList.remove('visible');
    searchResults.classList.add('hidden');

  }
  };

  return (
    <section className="search-bar">
      <div className="container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for articles..."
            aria-label="Search for articles"
            aria-describedby="search-button"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-primary" type="button" id="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {formSubmitted && (
          <div className={`search-results ${searchResults.length > 0 ? 'visible' : 'hidden'}`}>
            {searchResults.length > 0 ? (
              <>
                <h3 className="mb-4">Search Results</h3>
                <ul className="list-group">
                  {searchResults.map(article => (
                    <li key={article.id} className="list-group-item" onClick={handleListItemClick}>
                      <Link to={`/articles/${article.id}`} className="text-decoration-none">
                        <h4 className="mb-0">{article.title}</h4>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No Results Found</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
