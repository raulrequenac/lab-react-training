import React, {Component} from 'react'
import profiles from '../../data/berlin.json'
import './Facebook.css'

const countries = profiles.reduce(
  (acc, profile) => {
    if (!acc.includes(profile.country)) {
      acc.push(profile.country)
    }

    return acc
  }, ['All']
)

class Facebook extends Component{
  state = {
    display: Array(profiles.length).fill('none'),
    country: 'All'
  }

  onClickData(index) {
    const secondClick = this.state.display[index] === 'none'
    this.setState({
      display: this.state.display.fill('none')
    })
    if (secondClick) {
      const auxArr = [...this.state.display]
      auxArr[index] = ''
      this.setState({
        display: [...auxArr]
      })
    }
  }

  onClickButton(country) {
    this.setState({
      country: country
    })
  }

  render() {
    return (
      <ul className="Facebook">
        <div className="buttons">
          {countries.map((country, index) => <button key={index} onClick={() => this.onClickButton(country)} style={{background: this.state.country === country ? 'lightblue' : 'white'}}>{country}</button>)}
        </div>
        {profiles.map((profile, index) => (
          <li className="profile" key={index} style={{background: this.state.country === profile.country ? 'lightblue' : ''}}>
            <div className="container">
              <img alt="" src={profile.img} onClick={() => this.onClickData(index)}></img>
              <div className="data" style={{display: this.state.display[index]}}>
                <div><b>First Name: </b>{profile.firstName}</div>
                <div><b>Last Name: </b>{profile.lastName}</div>
                <div><b>Country: </b>{profile.country}</div>
                <div><b>Type: </b>{profile.isStudent ? 'Student' : 'Teacher'}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
} 

export default Facebook
