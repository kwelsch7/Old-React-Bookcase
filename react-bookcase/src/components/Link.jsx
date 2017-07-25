import * as React from 'react';

export const Link = props => (
  <a href={props.href} className={props.className}>
    {props.text}
  </a>
);