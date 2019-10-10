import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LoginFormContainer from './login_form_container';
import { smallModalStyles } from '../../util/form_util';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.resetErrors();
    this.props.closeModal('loginModal');
  }

  render() {
    return (
      <div className='modal-wrapper'>
        <Modal
          isOpen={this.props.loginFormIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={smallModalStyles}
          contentLabel="Example Modal"
        >
          <LoginFormContainer />
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
