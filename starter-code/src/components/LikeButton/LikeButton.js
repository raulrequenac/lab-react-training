import React, { Component } from 'react'
import './LikeButton.css'

class LikeButton extends Component {
  state = {
    likes: 0
  }

  like() {
    this.setState({
      likes: (this.state.likes+1)
    })
  }

  render() {
    const colors = this.props.colors
    const likes = this.state.likes

    return (
      <div className="LikeButton" style={{background: `${colors[likes % colors.length]}`}} onClick={() => this.like()}>
        <p>{likes} Likes</p>
      </div>
    )
  }
}

export default LikeButton
