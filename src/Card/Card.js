import React, { Component } from 'react';

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    }
  }


  render() {
    const { image, date, id, rover, camera } = this.props.photo;
    return(
      <div>
        <img src={image} />
      </div>
    )
  }
}