import React from 'react'
import './BoxColor.css'

const BoxColor = ({
  r,
  g,
  b
}) => (
  <div className="BoxColor" style={{background: `rgb(${r},${g},${b})`}}>
    <p className="row">rgb({r},{g},{b})</p>
    <p className="row">#{r.toString(16)}{g.toString(16)}{b.toString(16)}</p>
  </div>
)

export default BoxColor
