import React, {Component} from 'react'

class Carousel extends Component {
  state = {
    img: this.props.imgs[0],
    index: 0
  }

  onClickLeft() {
    const length = this.props.imgs.length
    const newIndex = ((this.state.index-1 % length) + length) % length

    this.setState({
      index: newIndex,
      img: this.props.imgs[newIndex]
    })
  }

  onClickRight() {
    const newIndex = (this.state.index+1) % this.props.imgs.length

    this.setState({
      index: newIndex,
      img: this.props.imgs[newIndex]
    })
  }

  render() {
    return (
      <div className="Carousel">
        <button onClick={() => this.onClickLeft()}>Left</button>
        <img alt="" src={this.state.img}></img>
        <button onClick={() => this.onClickRight()}>Right</button>
      </div>
    )
  }
}

export default Carousel
