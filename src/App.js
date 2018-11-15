import React, { Component } from 'react';
import './App.css';
import { apiKey } from './keys';
import { nasaCleaner } from './utils/helper';

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
      .then(data => this.setState({
        photos: nasaCleaner(data)
      }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
