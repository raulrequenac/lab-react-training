import React, {Component} from 'react'
import './Dice.css'

const emptyDice = '/img/dice-empty.png'

const diceFaces = [
  '/img/dice1.png',
  '/img/dice2.png',
  '/img/dice3.png',
  '/img/dice4.png',
  '/img/dice5.png',
  '/img/dice6.png',
]

const randomFace = () => diceFaces[Math.floor(Math.random()* diceFaces.length)]

class Dice extends Component {
  state = {
    dice: randomFace()
  }


  onClickDice = () => {
    this.setState({
      dice: emptyDice
    })

    setTimeout(() => {
      this.setState({
        dice: randomFace()
      })
    }, 1000);
  }

  render() {
    return(
      <div className="Dice">
        <img alt="" src={this.state.dice} onClick={() => this.onClickDice()}></img>
      </div>
    )
  }
}

export default Dice
