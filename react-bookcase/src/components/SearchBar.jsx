import * as React from 'react';

export const SearchBar = props => (
  <div className="search-bar">
    <input type="text" length="42px" placeholder="Search..." />
    <span className="search-icon">
      <i className="fa fa-search"></i>
    </span>
  </div>
);