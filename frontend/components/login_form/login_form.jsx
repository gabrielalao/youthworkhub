import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { hashHistory } from 'react-router';

import CloseModalButton from '../close_modal_button/close_modal_button';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToSignup = this.goToSignup.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.target.value}); };
  }

  componentDidUpdate() {
    const cu = this.props.currentUser;
    if (cu) {
      this.props.closeLoginModal();
    }
  }

  goToSignup() {
    this.props.closeLoginModal();
    this.props.resetErrors();
    this.props.openModal('signupModal');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => hashHistory.push('/jobs'));
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul className="error-list">
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    return(
      <div className='form'>

        <CloseModalButton modalName={'loginModal'} />

        <div className='modal-link'>
          <p>Not yet a member? <span onClick={this.goToSignup}>signup here</span></p>
        </div>

        <h2>Login</h2>
        {(errors.length > 0) ? errList : null }
        <form onSubmit={this.handleSubmit}>

          <div className='text-input'>
            <input type="text"
              placeholder=" "
              id="username"
              onChange={this.update('username')}
              value={this.state.username}
              required
            />
          <label htmlFor='userame'>Name</label>
          </div>

          <div className='text-input'>
            <input type="password"
              placeholder=" "
              onChange={this.update('password')}
              value={this.state.password}
              required
              />
            <label htmlFor='password'>Password</label>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
