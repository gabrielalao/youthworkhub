import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { largeModalStyles } from '../../util/form_util';

import SignupFormContainer from './signup_form_container';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeModal('signupModal');
    this.props.resetErrors();
  }

  render() {
    return (
      <div className='modal-wrapper'>
        <Modal
          isOpen={this.props.signupFormIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={largeModalStyles}
          contentLabel="Example Modal"
        >
          <SignupFormContainer />
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
