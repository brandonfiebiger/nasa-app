import React, { Component } from 'react';
import './App.css';
import { apiKey } from './keys';
import { nasaCleaner } from './utils/helper';
import { CardContainer } from './CardContainer/CardContainer';

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
        <CardContainer photos={ this.state.photos } />
      </div>
    );
  }
}

export default App;
