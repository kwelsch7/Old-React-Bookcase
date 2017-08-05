import React from 'react';
import { Table } from './Table';
import { OptionsBox } from './OptionsBox';

export class Content extends React.Component {
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
      ],
      [
        "9789996663331",
        "Hamlet",
        "William Shakespeare",
        "Tragedy",
        "Edit",
        "Delete"
      ],
      [
        "9787774441113",
        "The Screwtape Letters",
        "C.S. Lewis",
        "Satire",
        "Edit",
        "Delete"
      ],
      [
        "9788885552225",
        "The Indispensable Calvin and Hobbes",
        "Bill Watterson",
        "Humor",
        "Edit",
        "Delete"
      ],
      [
        "9789517538525",
        "A Tale of Two Cities",
        "Charles Dickens",
        "Historical Fiction",
        "Edit",
        "Delete"
      ],
      [
        "9787539518525",
        "Count Longardeaux's Dictionary",
        "Strong Bad",
        "Nonfiction",
        "Edit",
        "Delete"
      ],
      [
        "9784445556665",
        "C# for Dummies",
        "Whoever writes those",
        "Self-Help",
        "Edit",
        "Delete"
      ],
      [
        "9786665554445",
        "Taggerung",
        "Brian Jacques",
        "Fantasy",
        "Edit",
        "Delete"
      ],
      [
        "9781112223332",
        "Pajama Time",
        "Sandra Boynton",
        "Children's",
        "Edit",
        "Delete"
      ]
    ];

    const numberOfItemsPerPage = 5;

    const currentPage = 1;

    return (
      <div className="App-content">
        <h1 className="App-intro">
          Welcome to the React Bookcase!
        </h1>
        <h2 className="App-description">
          Feel free to add, update and remove books as you please.
        </h2>
        <div className="content-container">
          <OptionsBox />
          <Table contentType="books"
            headRow={tempHead}
            bodyRows={tempBookRows}
            itemsPerPage={numberOfItemsPerPage}
            currentPage={currentPage}/>
        </div>
      </div>
    );
  }
}