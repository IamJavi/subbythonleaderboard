import React from "react";

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a username..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
