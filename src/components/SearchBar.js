import React from 'react';

function SearchBar({ query, setQuery, suggestions, onAdd }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a market..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((sug, idx) => (
            <li key={idx}>{sug['Market Name']}</li>
          ))}
          <li onClick={onAdd} className="add-option">Add Market</li>
        </ul>
      )}
      <style jsx>{`
        .search-bar {
          position: relative;
          max-width: 600px;
          margin: 20px auto;
        }
        input {
          width: 100%;
          padding: 15px;
          font-size: 18px;
          border: none;
          border-radius: 5px;
          background-color: #5C4033; /* Medium brown */
          color: #F5E8C7;
        }
        .suggestions {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #4A2C2A;
          list-style: none;
          padding: 10px;
          margin: 0;
          border-radius: 0 0 5px 5px;
        }
        li {
          padding: 5px;
          cursor: pointer;
        }
        .add-option {
          font-style: italic;
          color: #DAB88B;
        }
      `}</style>
    </div>
  );
}

export default SearchBar;