import React from 'react'
import './Rating.css'

const rateStars = (rate) => {
  const realRate = Math.round(rate)
  const stars = []

  for (let i = 0; i < 5; i++) {
    i < realRate ? stars.push('★') : stars.push('☆')
  }
  return stars
}

const ratingColor = (white) => white === 'white' ? "Rating white" : "Rating"

const Rating = ({
  rate,
  white
}) => ( 
  <div className = {ratingColor(white)}> 
  {rateStars(rate)} 
  </div>
)

export default Rating
