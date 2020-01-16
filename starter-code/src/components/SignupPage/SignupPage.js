import React, {Component} from 'react'
import './SignupPage.css'

const nationalities = ['English', 'German', 'French']

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: 'English',
    submitDisplay: 'none',
    correctEmail: 'false',
    incorrectPassword: 'false'
  }

  greetingTranslation() {
    if (this.state.nationality === 'English') {
      return 'Hello'
    } else if (this.state.nationality === 'German') {
      return 'Halo'
    } else {
      return 'Bonjour'
    }
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  changeNationality(event) {
    this.setState({
      nationality: event.target.value
    })
  }

  handleSubmit(event) {
    this.setState({
      submitDisplay:''
    })
    event.preventDefault()
  }

  render() {
    return (
      <div className="SignupPage">
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={(event) => this.changeEmail(event)} />
            <small class="form-text text-muted">You typed a valid email</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(event) => this.changePassword(event)} />
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <select  className="form-control" value={this.state.nationality} onChange={(event) => this.changeNationality(event)}>
              {nationalities.map((nationality, index) => <option key={index} value={nationality}>{nationality}</option>)}
            </select>
            </div>
          <input type="submit" value="Sign up" className="btn btn-primary"/>
        </form>
        <div style={{display: this.state.submitDisplay}}>
          <hr></hr>
          <p>{this.greetingTranslation()}</p>
          <p>Your email adress is: {this.state.email}</p>
        </div>
      </div>
    )
  }
}

export default SignupPage
