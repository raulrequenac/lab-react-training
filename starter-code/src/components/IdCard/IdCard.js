import React from 'react'
import './IdCard.css'

const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture
}) => (
  <div className="IdCard">
    <div>
      <img src={picture} alt="" />
    </div>
    <div>
      <div><b>First Name: </b>{firstName}</div>
      <div><b>Last Name: </b>{lastName}</div>
      <div><b>Gender: </b>{gender}</div>
      <div><b>Height: </b>{height}</div>
      <div><b>Birth: </b>{birth.toDateString()}</div>
    </div>
  </div>
)

export default IdCard
