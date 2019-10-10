import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { largeModalStyles } from '../../util/form_util';

import WorkerSignupForm from './worker_signup_form';

class WorkerSignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.resetErrors();
    this.props.closeModal('workerSignupModal');
  }

  render() {
    return (
      <div>
        <Modal
          className='modal-wrapper'
          isOpen={this.props.workerSignupFormIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={largeModalStyles}
          contentLabel="Worker Signup Form"
        >
          <WorkerSignupForm
            closeModal={this.props.closeModal}
            openModal={this.props.openModal}
            currentUser={this.props.currentUser}
            errors={this.props.errors}
            edit={this.props.edit}
            signup={this.props.signup}
            login={this.props.login}
            resetErrors={this.props.resetErrors}
            frontendErrors={this.props.frontendErrors}
            fetchLocation={this.props.fetchLocation}
          />
        </Modal>
      </div>
    );
  }
}

export default WorkerSignupModal;
