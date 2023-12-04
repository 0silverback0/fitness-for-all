import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      // Make an API request when the search term changes
      axios.get(`http://localhost:8000/api/articles/search?title=${searchTerm}`)
        .then(response => {
          setSearchResults(response.data);
          console.log(searchResults)
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    } else {
      // Clear the search results when the search term is empty
      setSearchResults([]);
    }
  }, [searchTerm]);

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
          <button className="btn btn-primary" type="button" id="search-button">
            Search
          </button>
        </div>

        {/* Display search results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            <h3>Search Results</h3>
            <ul>
              {searchResults.map(article => (
                <li key={article.id}>
                  <h4>{article.title}</h4>
                  <p>{article.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
