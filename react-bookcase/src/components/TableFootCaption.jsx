import React from 'react';
import PropTypes from 'prop-types';

const TableFootCaption = props => (
  <caption className="table-foot-caption">{props.text}</caption>
);

TableFootCaption.propTypes = {
  text: PropTypes.string.isRequired
};

export default TableFootCaption;