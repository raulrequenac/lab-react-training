import React, {Component} from 'react'
import SingleColorPicker from './SingleColorPicker'
import './RGBColorPicker.css'

class RGBColorPicker extends Component {
  state = {
    r: this.props.r,
    g: this.props.g,
    b: this.props.b
  }

  changeColor = (event, name) => {
    if (name === 'R') {
      this.setState({
        r: event.target.value
      })
    } else if (name === 'G') {
      this.setState({
        g: event.target.value
      })
    } else {
      this.setState({
        b: event.target.value
      })
    }
  }

  render() {
    return (
      <div className="RGBColorPicker">
        <SingleColorPicker r={this.state.r} g={0} b={0} name="R" onChangeColor={this.changeColor}/>
        <SingleColorPicker r={0} g={this.state.g} b={0} name="G" onChangeColor={this.changeColor}/>
        <SingleColorPicker r={0} g={0} b={this.state.b} name="B" onChangeColor={this.changeColor}/>
        <div className="rgb">
          <div className="color" style={{ background: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`}}>&nbsp;</div>
          rgb({this.state.r}, {this.state.g}, {this.state.b})
        </div>
      </div>
    )
  }
}

export default RGBColorPicker
