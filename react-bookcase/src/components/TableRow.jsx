import React from 'react';
import PropTypes from 'prop-types';

const TableRow = props => {
  const row = props.rowItems.map((dataText, index) => (
    <td key={index}>
      {dataText}
    </td>
  ));
  return <tr key={props.rowIndex}>{row}</tr>;
};

TableRow.propTypes = {
  rowIndex: PropTypes.number,
  rowItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TableRow;