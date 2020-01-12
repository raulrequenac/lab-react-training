import React from 'react'
import './NumbersTable.css'

const printTable = (limit) => {
  const table = Array(limit).fill()

  return table.map((el, i) => (i+1)%2===0 ? 
    <li key={i+1} className="box bgRed">{i+1}</li> : 
    <li key={i+1} className="box">{i+1}</li>)
}

const NumbersTable = ({limit}) => (
  <ul className="NumbersTable">
    {printTable(limit)}
  </ul>
)

export default NumbersTable
