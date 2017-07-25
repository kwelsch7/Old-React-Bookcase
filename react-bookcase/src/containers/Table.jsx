import * as React from 'react';
import { BookRow } from '../components/BookRow';

export class Table extends React.Component {
  render() {
    return (
      <table>
        <BookRow/>
      </table>
    );
  }
}