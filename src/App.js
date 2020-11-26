import React, { Component } from 'react';
import './App.css';

import Data from './JSON/matches.json';

import { CardList } from './components/card-list/card-list.component';
import { Card } from './components/card/card.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: ''
    };
  }

  render() {
    const { searchField } = this.state;
    // Alternative of -
    // const searchField = this.state.searchField;

    const filteredData = Data.filter(post => 
      post.team1.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className = "App">
        <div className = "content">
          <h1 data-text="IPL Discovery"> IPL Discovery </h1>
        </div>
        <SearchBox 
          placeholder='Search Teams'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />

        <CardList>
          {
            filteredData.map(
              post => {
                return(
                  <Card key = {post.id} post = {post} />
                )
              }
            )
          }
        </CardList>
      </div>
    );
  }
}

export default App;