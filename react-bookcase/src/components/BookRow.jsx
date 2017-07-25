import * as React from 'react';

export const BookRow = props => {
  const row = props.rowItems.map((dataText, index) =>
    <td key={index}>
      {dataText}
    </td>
  );
  return <tr>{row}</tr>;
};