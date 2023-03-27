import React from 'react'

const Card = (props) => {
    const {title,des}=props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{des}</p>
    </div>
  )
}

export default Card
