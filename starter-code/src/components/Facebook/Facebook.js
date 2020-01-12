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
    lastProfile: 28,
    0: 'none',
    1: 'none',
    2: 'none',
    3: 'none',
    4: 'none',
    5: 'none',
    6: 'none',
    7: 'none',
    8: 'none',
    9: 'none',
    10: 'none',
    11: 'none',
    12: 'none',
    13: 'none',
    14: 'none',
    15: 'none',
    16: 'none',
    17: 'none',
    18: 'none',
    19: 'none',
    20: 'none',
    21: 'none',
    22: 'none',
    23: 'none',
    24: 'none',
    25: 'none',
    26: 'none',
    27: 'none',
  }

  onClickData(index) {
    if (this.state.lastProfile === index) {
      this.setState({
        [index]: this.state[index] === '' ? 'none' : ''
      })
    } else {
      this.setState({
        [index]: '',
        [this.state.lastProfile]: 'none',
        lastProfile: index
      })
    }
  }

  onClickButton(country) {
    
  }

  render() {
    return (
      <ul className="Facebook">
        <div className="buttons">
          {countries.map((country, index) => <button key={index}>{country}</button>)}
        </div>
        {profiles.map((profile, index) => (
          <li className="profile" key={index}>
            <div className="container">
              <img alt="" src={profile.img} onClick={() => this.onClickData(index)}></img>
              <div className="data" style={{display: this.state[index]}}>
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
