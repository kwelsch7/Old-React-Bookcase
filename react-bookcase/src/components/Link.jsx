import React from 'react';
import PropTypes from 'prop-types';

const Link = props => (
  <a href={props.href} className={props.className}>
    { props.icon ? <i className={props.icon}>&nbsp;&nbsp;</i> : "" }
    {props.text}
  </a>
);

Link.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Link;