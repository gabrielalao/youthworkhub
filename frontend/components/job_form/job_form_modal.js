import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { largeModalStyles } from '../../util/form_util';

import JobForm from './job_form';

class JobFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.resetErrors();
    this.props.closeModal('jobFormModal');
  }

  render() {
    return (
      <div>
        <Modal
          className='modal-wrapper'
          isOpen={this.props.jobFormIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={largeModalStyles}
          contentLabel="Job Form"
        >
          <JobForm
            closeModal={this.props.closeModal}
            openModal={this.props.openModal}
            currentUser={this.props.currentUser}
            errors={this.props.errors}
            currentJob={this.props.currentJob}
            frontendErrors={this.props.frontendErrors}
            addJob={this.props.addJob}
            editJob={this.props.editJob}
            fetchAddress={this.props.fetchAddress}
          />
        </Modal>
      </div>
    );
  }
}

export default JobFormModal;
