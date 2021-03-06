import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BusinessList } from '/components/BusinessList/BusinessList';
import { SearchBar } from '/components/SearchBar/SearchBar';

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
