import React, {Component} from 'react'
import './ClickablePicture.css'

class ClickablePicture extends Component {
  state = {
    bgImage: this.props.img
  }
  

  onClickImage() {
    const img = this.props.img
    const imgClicked = this.props.imgClicked

    this.setState({
      bgImage: this.state.bgImage === img ? imgClicked : img
    })
  }

  render() {
    return (
      <div 
        className="ClickablePicture" 
        onClick={() => this.onClickImage()}
      >
        <img alt="" src={this.state.bgImage}></img>
      </div>
    )
  }
}

export default ClickablePicture
