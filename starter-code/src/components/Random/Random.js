import React from 'react'
import './Random.css'

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min
}

const Random = ({
  min,
  max
}) => (
  <div className="Random">
    <p>Random value between {min} and {max} => {randomNumber(min, max)}</p>
  </div>
)

export default Random
