import React from 'react';


export const Info = (props) => {

  return(
    <div>
      <h1>{props.date}</h1>
      <h2>Rover: {props.rover.name}</h2>
      <h2>launch date: {props.rover.launch_date}</h2>
      <h2>landing date: {props.rover.landing_date}</h2>
      <h3>Camera: {props.camera.name}</h3>
    </div>
  )
}

export default Info;