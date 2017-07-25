import * as React from 'react';

export const TableHead = props => {
  const headers = props.headers.map((headerText, index) =>
    <th key={index}>
      {headerText}
    </th>
  );
  return <tr>{headers}</tr>;
};