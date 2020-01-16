import React from 'react'

const colorNumber = (r, g, b) => {
  if (r>0) {
    return r
  } else if (g>0) {
    return g
  } else {
    return b
  }
}

const SingleColorPicker = ({r, g, b, name, onChangeColor}) => {
  return (
    <div className="rgb">
      <div className="color" style={{background: `rgb(${r},${g},${b})`}}> &nbsp;</div>
      <div className="data">
        {name}: 
        <form>
          <input type="number" value={colorNumber(r,g,b)} onChange={event => onChangeColor(event, name)}>
          </input>
        </form>
      </div>
    </div>
  )
}

export default SingleColorPicker
