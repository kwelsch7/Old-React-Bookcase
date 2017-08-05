import React from 'react';
import PropTypes from 'prop-types';

const ItemsPerDropdown = props => {
  let options = [];
  for(let amount = 1; amount <= 10; amount++) {
    options.push(amount === 5 ? <option selected key={amount} value={amount}>{amount}</option> : <option key={amount} value={amount}>{amount}</option>);
  }
  return (
    <div className="items-per-dropdown-container">
      <label>Items per Page:</label>
      <select className="items-per-dropdown" onChange={props.onChange}>{options}</select>
    </div>
  );
};

ItemsPerDropdown.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ItemsPerDropdown;