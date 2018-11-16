import React, { Component } from 'react';
import './Card.css';

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
      <div className="Card">
        <img src={image} />
      </div>
    )
  }
}

export default Card;