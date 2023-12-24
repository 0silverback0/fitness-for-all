import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchTerm) {
      axios.get(`http://localhost:8000/api/articles/search?title=${searchTerm}`)
        .then(response => {
          setSearchResults(response.data.articles);
          console.log(searchResults);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    } else {
      setSearchResults([]);
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
          />
          <button className="btn btn-primary" type="button" id="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {searchResults.length > 0 ? (
          <div className="search-results">
            <h3>Search Results</h3>
            <ul>
              {searchResults.map(article => (
                <li key={article.id}>
                  <Link to={`/articles/${article.id}`}>
                    <h4>{article.title}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default SearchBar;

