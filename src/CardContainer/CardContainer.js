import React from 'react';
import { Card } from '../Card/Card';

export const CardContainer = (props) => {
  
  const displayCards = () => {
    return props.photos.map(photo => <Card photo={photo} />);
  }

  return (
    <section>
      {displayCards()}
    </section>
  )
}
