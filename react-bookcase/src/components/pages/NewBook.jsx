import React from 'react';

export const NewBook = props => (
  <div className="new-book-page">
    <h3 className="App-intro">Create a new book</h3>
    <h4 className="App-description">Please provide the necessary information to put another one on the shelf.</h4>
    <form>
      <label>ISBN</label>
      <input type="text" placeholder="ISBN..." />
      <label>Title</label>
      <input type="text" placeholder="Title..." />
      <label>Author</label>
      <input type="text" placeholder="Author..." />
      <label>Genre</label>
      <select>
        <option>Fantasy</option>
        <option>Humor</option>
        <option>Satire</option>
        <option>Other</option>
      </select>
      <input type="submit" value="Create" className="create-button" />
    </form>
  </div>
);