import * as React from 'react';
import { Link } from '../components/Link';

export class OptionsBox extends React.Component {
  render() {
    return (
      <ul className="options-box">
        <li>
          <Link href="#" text="Add new Book" className="options-links" />
        </li>
        <li>
          <Link href="#" text="Dump the shelf!" className="options-links" />
        </li>
        <li>
          <Link href="#" text="Genre list" className="options-links" />
        </li>
        <li>
          <Link href="#" text="Page settings" className="options-links" />
        </li>
        <li>
          <Link href="#" text="Themes" className="options-links" />
        </li>
      </ul>
    );
  }
}