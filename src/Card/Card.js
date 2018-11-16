import React, { Component } from 'react';
import './Card.css';
import Info from '../Info/Info';

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    }
  }

  handleToggle = () => {
    this.setState({
      toggled: !this.state.toggled
    })
  }


  render() {
    const { toggled } = this.state;
    const { image, date, id, rover, camera } = this.props.photo;

    return(
      <div className="Card" onClick={this.handleToggle} key={id}>
        {toggled ? <Info date={date} rover={rover} camera={camera} id={id} key={id}/>: <img src={image} />}
      </div>
    )
  }
}

export default Card;