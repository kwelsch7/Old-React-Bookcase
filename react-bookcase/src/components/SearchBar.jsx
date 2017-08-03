import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => (
  <div className="search-bar">
    <input type="text" size="42px" placeholder="Search..." />
    <span className="search-icon">
      <i className="fa fa-search"></i>
    </span>
  </div>
);

SearchBar.propTypes = {

};

export default SearchBar;