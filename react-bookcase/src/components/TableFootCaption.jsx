import React from 'react';
import PropTypes from 'prop-types';

const TableFootCaption = props => (
  <caption className={props.className}>{props.text}</caption>
);

TableFootCaption.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TableFootCaption;