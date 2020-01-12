import React from 'react'
import './CreditCard.css'

const typeLogo = (type) => {
  return type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'
}

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => (
  <div className="CreditCard" style={{background: `${bgColor}`}}>
    <div className="logo">
      <img src={typeLogo(type)} alt=""></img>
    </div>
    <div className="number">
      <h1 style={{color: `${color}`}}>···· ···· ···· {number.slice(-4)}</h1>
    </div>
    <div className="data">
      <div className="bank">
        <p style={{color: `${color}`}}>Expires {expirationMonth}/{expirationYear}</p>
        <p style={{color: `${color}`}}>{bank}</p>
      </div> 
      <p style={{color: `${color}`}}>{owner}</p>
    </div>
  </div>
)

export default CreditCard
