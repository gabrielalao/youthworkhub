import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { smallModalStyles, errorsList } from '../../util/form_util';

import CloseModalButton from '../close_modal_button/close_modal_button';

class AcceptJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.props.resetErrors();
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.acceptJob(this.props.job, this.props.currentUser.id)
      .then(() => {
        this.props.resetErrors();
        this.props.closeModal();
        this.props.fetchJob(this.props.job.id);
      });
  }

  render() {
    const errors = errorsList(this.props);
    const date = new Date(this.props.job.start_time);
    const dateString = date.toDateString();
    const time = date
      .toLocaleTimeString('US-en')
      .replace(/:(\d{2}) (?=[AP]M)/, " ");
    return (
      <div>
        <Modal
          className='modal-wrapper'
          isOpen={this.props.acceptJobModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal.bind(this)}
          style={smallModalStyles}
          contentLabel="Job Form"
        >
          <div className='form'>

            <CloseModalButton modalName={'acceptJobModal'} />

            <h2>Agree to Accept</h2>

            {(this.props.errors.length > 0) ? errors : null }

            <form onSubmit={this.handleSubmit} id='accept-job-form'>

              <div className='checkbox-input'>
                <div className='cost-check'>
                  total cost: ${this.props.job.cost}
                </div>
                <input type="checkbox"
                  id="accept-cost"
                  required
                  defaultChecked={false}
                />
              <label htmlFor='accept-cost'>Check to confirm that you will be
                there for this job at {time} on {dateString}.
                </label>
              </div>

              <button type="submit">Take Job</button>

            </form>
          </div>

        </Modal>
      </div>
    );
  }
}

export default AcceptJobForm;
