import React, {Component} from 'react'
import './SignupPage.css'

const nationalities = ['English', 'German', 'French']

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: 'English',
    submitDisplay: 'none'
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
    if(event.target.value) {
      this.setState({
        correctEmail: 'valid-feedback'
      })
    } else {
      this.setState({
        correctEmail: ''
      })
    }

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
    if (this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      (this.validateEmail() || this.validatePassword())) {
      this.setState({
        submitDisplay:''
      })
    }
    event.preventDefault()
  }

  validateEmail() {
    const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return REGEX.test(this.state.email.toLocaleLowerCase())
  }

  validatePassword() {
    const passLength = this.state.password.length
    return passLength >= 8 || passLength < 1
  }

  render() {
    return (
      <div className="SignupPage">
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className={`form-control ${this.validateEmail() ? 'is-valid' : ''}`} placeholder="Enter email" value={this.state.email} onChange={(event) => this.changeEmail(event)} />
            <div className="valid-feedback">
              You typed a valid email
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className={`form-control ${this.validatePassword() ? '' : 'is-invalid'}`} placeholder="Password" value={this.state.password} onChange={(event) => this.changePassword(event)} />
            <div className="invalid-feedback">
              Your password is too weak
            </div>
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
