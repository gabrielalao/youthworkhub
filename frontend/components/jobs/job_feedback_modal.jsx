import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { smallModalStyles, errorsList } from '../../util/form_util';

import JobFeedbackForm from './job_feedback_form';

import merge from 'lodash/merge';

class JobFeedbackModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge(({
      user_id: this.props.currentUser ? this.props.currentUser.id : "",
      job_id: this.props.job.id,
      body: "",
      rating: "",
      job_status: this.props.job.status
    }), this.props.job.review);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.props.resetErrors();
    this.props.closeModal();
  }

  update(field) {
    return e => {
      if(field === 'rating') {
        this.setState({[field]: e.target.value})}
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.job.review) {
      this.props.updateFeedback(this.state)
        .then(() => {
          this.props.resetErrors();
          this.props.closeModal();
        });
    } else {
      this.props.giveFeedback(this.state)
      .then(() => {
        this.props.resetErrors();
        this.props.closeModal();
      });
    }
  }

  render() {
    const errors = errorsList(this.props);
    return (
      <div>
        <Modal
          className='modal-wrapper'
          isOpen={this.props.jobFeedbackModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={smallModalStyles}
          contentLabel="Feedback Form"
        >
          <JobFeedbackForm />

        </Modal>
      </div>
    );
  }
}

export default JobFeedbackModal;
