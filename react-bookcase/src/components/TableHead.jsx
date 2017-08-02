import React from 'react';
import PropTypes from 'prop-types';

const TableHead = props => {
  const headers = props.headers.map((headerText, index) =>
    <th key={index}>
      {headerText}
    </th>
  );
  return <tr>{headers}</tr>;
};

TableHead.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TableHead;