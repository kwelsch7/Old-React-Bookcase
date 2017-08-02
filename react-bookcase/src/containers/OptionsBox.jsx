import * as React from 'react';
import { Link } from '../components/Link';

export class OptionsBox extends React.Component {
  render() {
    return (
      <ul className="options-box">
        <li>
          <Link href="#" text="Add new Book" className="options-links" icon="fa fa-book" />
        </li>
        <li>
          <Link href="#" text="Dump the shelf!" className="options-links" icon="fa fa-undo" />
        </li>
        <li>
          <Link href="#" text="Genre list" className="options-links" icon="fa fa-list-alt" />
        </li>
        <li>
          <Link href="#" text="Page settings" className="options-links" icon="fa fa-cog" />
        </li>
        <li>
          <Link href="#" text="Themes" className="options-links" icon="fa fa-image" />
        </li>
      </ul>
    );
  }
}