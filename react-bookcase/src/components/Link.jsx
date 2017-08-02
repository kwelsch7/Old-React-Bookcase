import * as React from 'react';

export const Link = props => (
  <a href={props.href} className={props.className}>
    { props.icon ? <i className={props.icon}></i> : "" }
    { props.icon ? " " : "" }
    {props.text}
  </a>
);