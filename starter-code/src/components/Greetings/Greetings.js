import React from 'react'
import './Greetings.css'

const Greeting = ({
  lang,
  children
}) => (
  <div className="Greeting">
    <p lang={lang}>{children}</p>
  </div>
)

export default Greeting
