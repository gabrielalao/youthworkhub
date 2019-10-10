import React from 'react';
import merge from 'lodash/merge';

import { DateTimePicker } from 'react-widgets';

import Moment from 'moment';

import momentLocalizer from '../../../node_modules/react-widgets/lib/localizers/moment';

momentLocalizer(Moment);

import CloseModalButton from '../close_modal_button/close_modal_button';

class WorkerSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({
      username: "",
      email: "",
      phone_number: "",
      picture_url: "",
      bio: "",
      birth_date: "",
      zip_code: "",
      lat: "",
      lng: "",
      min_wage: "",
      password: "",
      passwordCheck: ""
    }, this.props.currentUser);
    this.update = this.update.bind(this);
    this.updateZip = this.updateZip.bind(this);
    this.setBirthdate = this.setBirthdate.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.activateCloudinaryWidget = this.activateCloudinaryWidget.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.target.value}); };
  }

  updateZip(e) {
    this.props.fetchLocation(e.target.value).then((res) => {
      if(res) {
        const latitude = res.results[0].geometry.location.lat;
        const longitude = res.results[0].geometry.location.lng;

        this.setState({ lat: latitude, lng: longitude })
      }
    })
    this.setState({ zip_code: e.target.value })
  }

  setBirthdate(data) {
    const date = new Date(data);
    this.setState({ birth_date: date.toDateString() })
  }

  validatePassword() {
    return (this.state.passWordCheck.length > 5 &&
      this.state.password === this.state.passwordCheck);
  }

  goToLogin() {
    this.props.closeModal('signupModal');
    this.props.resetErrors();
    this.props.openModal('loginModal');
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.password !== this.state.passwordCheck) {
      this.props.frontendErrors(["Passwords do not match"]);
    } else if(this.state.id) {
      this.props.edit(this.state).then(() => {
        this.props.closeModal();
        this.props.history.push('/jobs');
      })
    } else {

      this.props.signup(this.state).then((worker) => {
        this.props.closeModal();
        this.props.history.push('/jobs');
      })
    }
  }

  activateCloudinaryWidget() {
    cloudinary.openUploadWidget(
      { cloud_name: 'youth-work-hub',
        upload_preset: 'profile_pic' },
        (error, result) => {
          if(result) {
            this.setState({picture_url: result[0].secure_url});

          } else if(error) {
            console.log(error);
          }
      });
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul className="error-list">
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    let text = "Sign Up Worker";
    let password =
          <div>
            <div className='text-input'>
              <input type="password"
                onChange={this.update('password')}
                placeholder=" "
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

    if (this.props.currentUser && this.props.currentUser.isWorker) {
      text = "Edit Account";
      password = "";
    }
    const modalLink =
      <div className='modal-link'>
        <p>Already joined ? <span
          onClick={this.goToLogin}>login here</span>
        </p>
      </div>;
    const date = new Date();
    date.setYear(date.getFullYear() - 15);
    const birthDate = this.state.birth_date == "" ?
                      date :
                      new Date(this.state.birth_date);

    return (
      <div className='form'>

        <CloseModalButton modalName={'workerSignupModal'} />

        {this.props.currentUser ? "" : modalLink}

        <h2>{text}</h2>

        {(errors.length > 0) ? errList : null }

        <form onSubmit={this.handleSubmit}>

          <div className='text-input'>
            <input type="text"
              id="username"
              placeholder=" "
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

          <div className='textarea-input'>
            <textarea id="bio"
              onChange={this.update('bio')}
              value={this.props.bio}
              placeholder=" "
            />
            <label htmlFor='bio'>Brief bio</label>
          </div>

          <div className='react-widget'>
            <label htmlFor='date-of-birth'>Birthdate</label>
            <DateTimePicker
              time={false}
              defaultValue={birthDate}
              onChange={this.setBirthdate}
            />
          </div>

          <div className='text-input'>
            <input type="text"
              id="zipcode"
              placeholder=" "
              onChange={this.update('zip_code')}
              onBlur={this.updateZip}
              value={this.state.zip_code}
            />
            <label htmlFor='zipcode'>Zipcode</label>
          </div>

          <div className='number-input'>
            <div>
              <label htmlFor='min-wage'>Min Wage ($/hr)</label>
            </div>
            <div>
              <input type="number"
                id="min-wage"
                placeholder=" "
                onChange={this.update('min_wage')}
                value={this.state.min_wage}
                min="0"
                step="1"
                />
            </div>
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

export default WorkerSignupForm;
