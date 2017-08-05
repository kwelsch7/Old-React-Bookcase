import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => (
  <div className="search-bar">
    <input type="search" size="42px" placeholder="Search..." onInput={props.onInput} />
    <span className="search-icon">
      <i className="fa fa-search"></i>
    </span>
  </div>
);

SearchBar.propTypes = {
  onInput: PropTypes.func.isRequired
};

export default SearchBar;