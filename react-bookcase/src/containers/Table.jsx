import * as React from 'react';
import { BookRow } from '../components/BookRow';
import { PagingNav } from '../components/PagingNav';
import { SearchBar } from '../components/SearchBar';
import { TableFootCaption } from '../components/TableFootCaption';
import { TableHead } from '../components/TableHead';

export class Table extends React.Component {
  render() {
    const tempHead = [
      "ISBN",
      "Title",
      "Author",
      "Genre",
      "Edit",
      "Delete"
    ];
    const tempBookRows = [
      [
        "9786453126452",
        "The Silmarillion",
        "J.R.R. Tolkein",
        "Fantasy",
        "Edit",
        "Delete"
      ],
      [
        "9789789789789",
        "Elantris",
        "Brandon Sanderson",
        "Fantasy",
        "Edit",
        "Delete"
      ],
      [
        "9783123123123",
        "7 Years of Highly Defective People",
        "Scott Adams",
        "Humor",
        "Edit",
        "Delete"
      ]
    ];
    return (
      <div className="table-area">
        <SearchBar />
        <table>
          <thead>
            <TableHead headers={tempHead}/>
          </thead>
          <tbody>
            <BookRow rowItems={tempBookRows[0]} />
            <BookRow rowItems={tempBookRows[1]} />
            <BookRow rowItems={tempBookRows[2]} />
          </tbody>
        </table>
        <TableFootCaption text="Displaying 3 out of 3 books." className="table-foot-caption" />
        <PagingNav />
      </div>
    );
  }
}