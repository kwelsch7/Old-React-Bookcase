import React from 'react';
import PropTypes from 'prop-types';

const PagingNav = props => {
  let listItems = [];
  for(let index = 1; index <= props.pageCount; index++) {
    const isActive = index === props.active;
    const li = isActive ? <li className="active-page" key={index}>{index}</li> : <li onClick={props.onClick} key={index}>{index}</li>
    listItems.push(li);
  }
  return <ul className="paging-buttons">{listItems}</ul>;
}

PagingNav.propTypes = {
  active: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  pageCount: PropTypes.number.isRequired
};

export default PagingNav;
