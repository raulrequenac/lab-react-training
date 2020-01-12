import React from 'react'
import Rating from '../Rating/Rating'
import './DriverCard.css'

const imageShape = (index) => {
  return index === 0 ? "rectangle" : "square"
}

const DriverCard = ({
  name,
  rating,
  img,
  car,
  id
}) => (
  <div className="DriverCard">
    <div className="driverCardImage">
      <img src={img} alt="" className={imageShape(id)}></img>
    </div>
    <div className="data">
      <h2 className="white">{name}</h2>
      <Rating rate={rating} white="white"/>
      <p className="white">{car.model} - {car.licensePlate}</p>
    </div>
  </div>
)

export default DriverCard
