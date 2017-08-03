import React from 'react';
import PropTypes from 'prop-types';

import PagingNav from '../components/PagingNav';
import SearchBar from '../components/SearchBar';
import TableFootCaption from '../components/TableFootCaption';
import TableHead from '../components/TableHead';
import TableRow from '../components/TableRow';

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.currentPage || 1,
      searchFilter: ""
    };
    this.filterSearch = this.filterSearch.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  render() {
    let {contentType, headRow, bodyRows, itemsPerPage} = this.props;
    itemsPerPage = itemsPerPage || 5;
    bodyRows = bodyRows || [];
    bodyRows = this.trimByFilter(bodyRows);
    const totalItems = bodyRows.length;
    let currentPage = this.fromStateOrLessIfFiltered(itemsPerPage, totalItems);
    const displayRange = this.calcItemRange(itemsPerPage, currentPage, totalItems);
    const captionText = `Displaying ${totalItems > 0 ? displayRange.low + 1 : 0} to ${displayRange.high} of ${totalItems} ${contentType}.`;
    const emptyListText = `- No ${contentType} to display. -`;

    return (
      <div className="table-area">
        <SearchBar onInput={this.filterSearch} />
        <table>
          <thead>
            <TableHead headers={headRow}/>
          </thead>
          <tbody>
            {
              bodyRows ?
              bodyRows.map((rowArray, rowIndex) => (
                <TableRow rowIndex={rowIndex} rowItems={rowArray} />
              )).slice(displayRange.low, displayRange.high)
              : <tr><td colSpan={headRow.length}>{emptyListText}</td></tr>
            }
          </tbody>
          <TableFootCaption text={captionText} />
        </table>
        <PagingNav active={parseInt(currentPage)} pageCount={displayRange.totalPages} onClick={this.changePage} />
      </div>
    );
  }

  trimByFilter(bodyRows) {
    return bodyRows.filter(row => {
      let include = false;
      for(let item of row) {
        if(item.toLowerCase().includes(this.state.searchFilter)) {
          include = true;
          break;
        }
      }
      return include;
    });
  }

  fromStateOrLessIfFiltered(itemsPerPage, totalItems) {
    let currentPage = this.state.currentPage;
    let tempLow = itemsPerPage * (currentPage - 1);
    while(tempLow > totalItems) {
      currentPage--;
      tempLow = itemsPerPage * (currentPage - 1);
    }
    return currentPage;
  }

  calcItemRange(itemsPerPage, currentPage, totalItems) {
    if(totalItems === 0) {
      return {
        low: 0,
        high: 0,
        totalPages: 1
      };
    }

    let low = itemsPerPage * (currentPage - 1);
    let high = low + itemsPerPage;
    high = high <= totalItems ? high : totalItems;
    let totalPages = Math.ceil(totalItems / itemsPerPage);

    return {
      low: low,
      high: high,
      totalPages: totalPages
    };
  }

  filterSearch(searchBox) {
    this.setState({ searchFilter: searchBox.target.value.toLowerCase() });
  }

  changePage(newPage) {
    this.setState({ currentPage: newPage.target.innerText });
  }

  static propTypes = {
    contentType: PropTypes.string.isRequired,
    itemsPerPage: PropTypes.number,
    currentPage: PropTypes.number,
    headRow: PropTypes.arrayOf(PropTypes.string).isRequired,
    bodyRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  };
}
