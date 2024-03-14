import React from 'react'

function Card(props) {
  return (
    <div className={props.className}>
      <h2>{props.heading}</h2>
      <p>{props.paragraph}</p>
      <img src={props.image}/>
    </div>
  )
}

export default Card
