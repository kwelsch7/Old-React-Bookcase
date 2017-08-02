import React from 'react';
import PropTypes from 'prop-types';

const PagingNav = props => {
  let listItems = [];
  for(let index = 1; index <= props.pageCount; index++) {
    let isActive = index === props.active;
    listItems.push(<li className={isActive ? "active-page" : ""}>{index}</li>);
  }
  return <ul className="paging-buttons">{listItems}</ul>
};

PagingNav.propTypes = {
  active: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired
};

export default PagingNav;