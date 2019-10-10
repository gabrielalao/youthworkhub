import React from 'react';
import { Link, hashHistory } from 'react-router';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleGuestWorkerLogin = this.handleGuestWorkerLogin.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.resetJobs();
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.guestLogin(this.state)
    hashHistory.push('/jobs');
  }

  handleGuestWorkerLogin(e) {
    e.preventDefault();
    this.props.guestWorkerLogin(this.state)
    hashHistory.push('/jobs');
  }

  openModal(modalName) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(modalName);
    };
  }

  render() {
    if (this.props.currentUser) {
      const member = this.props.currentUser;
      let picUrl = member.picture_url;
      if(picUrl === null) {
        picUrl = "http://res.cloudinary.com/youth-work-hub/image/upload/v1484946674/default-user_frye7s.png";
      }
      console.log(picUrl);
      return (
        <div id="login-box">
          <div>
            <img alt="profile picture" src={picUrl} />
            <h5 className='logout'>Logout</h5>
            <div className="popup logged-in">
              <button onClick={(member.isWorker) ?
                  this.openModal('workerSignupModal') :
                  this.openModal('signupModal')
              }>Edit Account</button>
            <button onClick={this.handleLogout}>Log out</button>
              </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="login-box">
          <div className="unlogged">
            <i className="fa fa-user-plus fa-2x"
               aria-hidden="true"
               id="user-icon"
            ></i>
            <h5>Login/Signup</h5>
            <div className="popup-buttons">
              <button
                onClick={this.openModal('loginModal')}
                >Login
              </button>
              <button
                className='highlight'
                onClick={this.handleGuestLogin}
                >Employer Demo
              </button>
              <span className="flag" title="Trial Account to test out the functionality"></span>
              <button
                onClick={this.openModal('signupModal')}
                >Employer Signup
              </button>
              <button
                onClick={this.openModal('workerSignupModal')}
                >Worker Signup
              </button>
              <button
                className='highlight'
                onClick={this.handleGuestWorkerLogin}
                >Worker Demo
              </button>
              <span className="flag" title="Trial Account to test out the functionality"></span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default LoginBox;
