import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';

import CloseModalButton from '../close_modal_button/close_modal_button';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({
      name: "",
      email: "",
      phone_number: "",
      bio: "",
      zip_code: "",
      picture_url: "",
      password: "",
      passwordCheck: ""
    }, this.props.currentUser);
    this.update = this.update.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.activateCloudinaryWidget = this.activateCloudinaryWidget.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.target.value}); };
  }

  validatePassword() {
    return (this.state.passWordCheck.length > 5 &&
      this.state.password === this.state.passWordCheck);
  }

  goToLogin() {
    this.props.closeModal();
    this.props.resetErrors();
    this.props.openModal('loginModal');
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.password !== this.state.passwordCheck) {
      this.props.frontendErrors(["passwords do not match"]);
    } else {
      if (this.props.currentUser) {
        //This little params bit is a workaround to avoid sending
        // an empty password in on edit user
        const params = {};
        Object.keys(this.state).forEach((key) => {
          if (this.state[key] !== "" && this.state[key] !== null) {
            params[key] = this.state[key];
          }
        });
        params['id'] = this.state.id;
        this.props.editUser(params).then(() => {
          this.props.closeModal();
        });
      } else {
        this.props.signup(this.state).then(() => {
          this.props.closeModal();
        });
      }
    }
  }

  activateCloudinaryWidget(e) {
    e.preventDefault();
    cloudinary.openUploadWidget({ cloud_name: 'youth-work-hub',
                                  upload_preset: 'cropped_profile' },
                                  (error, result) => {
        this.setState({picture_url: result[0].secure_url});
      }
    );
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul className='error-list'>
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    let text = "Sign Up";
    let password =
          <div>
            <div className='text-input'>
              <input type="password"
                placeholder=" "
                onChange={this.update('password')}
                value={this.state.password}
                required
                />
              <label htmlFor='password'>Password</label>
            </div>

            <div className='text-input'>
              <input type="password"
                placeholder=" "
                onChange={this.update('passwordCheck')}
                value={this.state.passwordCheck}
                required
                />
              <label htmlFor='passwordCheck'>Confirm Password</label>
            </div>
          </div>;

    if (this.props.currentUser) {
      text = "Edit Account";
      password = "";
    }

    const modalLink =
      <div className='modal-link'>
        <p>Already a member ? <span
          onClick={this.goToLogin}>login here</span>
        </p>
      </div>;

    return (
      <div className='form'>

        <CloseModalButton modalName={'signupModal'} />

        {this.props.currentUser ? "" : modalLink}

        <h2>{text}</h2>
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
            <input type="email"
              id="email"
              placeholder=" "
              onChange={this.update('email')}
              value={this.state.email}
              required
              />
            <label htmlFor='email'>Email</label>
          </div>

          <div className='text-input'>
            <input type="text"
              id="phone"
              placeholder=" "
              onChange={this.update('phone_number')}
              value={this.state.phone_number}
              required
              />
            <label htmlFor='phone_number'>Phone</label>
          </div>

          <div className='photo-input'>
            <button className='photo-button' onClick={this.activateCloudinaryWidget}>
              <i className="fa fa-camera fa-2x" aria-hidden="true"></i><br />
              upload photo
            </button>
          </div>

          { password }

          <button type="submit">{text}</button>
        </form>

      </div>
    );
  }
}

export default SignupForm;
