import React from 'react';
import PropTypes from 'prop-types';

import PagingNav from '../components/PagingNav';
import SearchBar from '../components/SearchBar';
import TableFootCaption from '../components/TableFootCaption';
import TableHead from '../components/TableHead';
import TableRow from '../components/TableRow';

export class Table extends React.Component {
  render() {
    let {contentType, headRow, bodyRows, itemsPerPage, currentPage} = this.props;
    itemsPerPage = itemsPerPage || 5;
    currentPage = currentPage || 1;
    const captionText = `Displaying ${bodyRows ? bodyRows.length : 0} out of ${bodyRows ? bodyRows.length : 0} ${contentType}.`; // low to high of total items
    const emptyListText = `- No ${contentType} to display. -`;
    const displayRange = this.calcItemRange(itemsPerPage, currentPage, bodyRows.length);

    return (
      <div className="table-area">
        <SearchBar />
        <table>
          <thead>
            <TableHead headers={headRow}/>
          </thead>
          <tbody>
            {
              bodyRows ?
              // filter by whether text in the rowItems contains the text in the search box
              bodyRows.map((rowArray, rowIndex) => (
                <TableRow rowIndex={rowIndex} rowItems={rowArray} />
              )).slice(displayRange.low, displayRange.high)
              : <tr><td colSpan={headRow.length}>{emptyListText}</td></tr>
            }
          </tbody>
        </table>
        <TableFootCaption text={captionText} className="table-foot-caption" />
        <PagingNav active={currentPage} pageCount={displayRange.totalPages} />
      </div>
    );
  }

  calcItemRange(itemsPerPage, currentPage, totalItems) {
    let low = itemsPerPage * (currentPage - 1) + 1;
    let high = low + itemsPerPage;
    let totalPages = Math.ceil(totalItems / itemsPerPage);

    return {
      low: low,
      high: high,
      totalPages: totalPages
    };
  }

  propTypes = {
    contentType: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number,
    currentPage: PropTypes.number,
    headRow: PropTypes.arrayOf(PropTypes.string).isRequired,
    bodyRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  };
}
