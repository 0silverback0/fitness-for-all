import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    setSearchResults([]);

    if (searchTerm) {
      axios.get(`https://marz.pythonanywhere.com/api/articles/search?title=${searchTerm}`)
        .then(response => {
          setSearchResults(response.data.articles);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    }
  };

 
  useEffect(() => {
    const handleRouteChange = () => {
      setSearchResults([]);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      // Cleanup event listener
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleListItemClick = () => {
    // Clear search results when a list item is clicked
    setSearchResults([]);
  };

  return (
    <section className="search-bar">
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for articles..."
              aria-label="Search for articles"
              aria-describedby="search-button"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button className="btn btn-primary" type="button" id="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </form>

        {searchResults.length > 0 ? (
          <div className="search-results">
          <h3 className="mb-4">Search Results</h3>
          <ul className="list-group">
            {searchResults.map(article => (
              <li key={article.id} onClick={handleListItemClick} className="list-group-item">
                <Link to={`/articles/${article.id}`} className="text-decoration-none">
                  <h4 className="mb-0">{article.title}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        ) : (
          <div className="search-results">
            <p>No Results Found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
