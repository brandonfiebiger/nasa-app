import React from 'react';
import { Card } from '../Card/Card';
import './CardContainer.css'

export const CardContainer = (props) => {
  
  const displayCards = () => {
    return props.photos.map(photo => <Card photo={photo} />);
  }

  return (
    <section className="CardContainer">
      {displayCards()}
    </section>
  )
}

export default CardContainer;
