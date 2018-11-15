import React, { Component } from 'react';
import './App.css';
import { apiKey } from './keys';

class App extends Component {
  constructor() {
    super()

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
