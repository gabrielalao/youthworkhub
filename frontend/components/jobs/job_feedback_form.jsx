import React from 'react';

import { errorsList } from '../../util/form_util';

import merge from 'lodash/merge';

import { connect } from 'react-redux';

import { giveFeedback,
         updateFeedback,
         fetchJob } from '../../actions/job_actions';

import { closeModal } from '../../actions/modal_actions';

import { resetErrors, receiveErrors } from '../../actions/session_actions';

import JobFeedbackModal from './job_feedback_modal';

import CloseModalButton from '../close_modal_button/close_modal_button';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  jobFeedbackModalIsOpen: state.modals.jobFeedbackModal,
  job: state.jobDetail,
  worker: state.workerDetail
});

const mapDispatchToProps = dispatch => ({
  closeJobFeedbackForm: () => dispatch(closeModal('jobFeedbackModal')),
  resetErrors: () => dispatch(resetErrors()),
  giveFeedback: (feedback) => dispatch(giveFeedback(feedback)),
  updateFeedback: (feedback) => dispatch(updateFeedback(feedback)),
  fetchJob: (id) => dispatch(fetchJob(id))
});

class JobFeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge(({
      user_id: this.props.currentUser ? this.props.currentUser.id : "",
      job_id: this.props.job.id,
      body: "",
      rating: 5,
      job_status: this.props.job.status,
    }), this.props.job.review);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      const value = (field === 'rating') ? parseInt(e.target.value) : e.target.value
      this.setState({ [field]: value })}
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.job.review) {
      this.props.updateFeedback(this.state)
        .then(() => {
          this.props.resetErrors();
          this.props.closeJobFeedbackForm();
          this.props.fetchJob(this.props.job.id);
        });
    } else {
      this.props.giveFeedback(this.state)
        .then(() => {
          this.props.resetErrors();
          this.props.closeJobFeedbackForm();
          this.props.fetchJob(this.props.job.id);
      });
    }
  }

  render() {
    const errors = errorsList(this.props);
    const rating = this.state.rating;
    const completion = this.state.job_status;

    return (
      <div className='form'>

        <CloseModalButton modalName={'jobFeedbackModal'} />

        <h4>Leave Feedback</h4>

        {(this.props.errors.length > 0) ? errors : null }

        <form onSubmit={this.handleSubmit} id='job-feedback-form'>

          <div className='rating-clarifier'>
            <h4>You give this job {rating} star{rating === "1" ? "" : "s"}</h4>
          </div>

          <div className='rating-stars'>

            <div className="stars">
            	<input
                type="radio"
                id="rating-5"
                onChange={this.update('rating')}
                value={5}
              />
              <label htmlFor="rating-5"
                className={(this.state.rating===5 ? "checked" : "")}
              >
            		<i className="fa fa-star"></i>
             		<i className="fa fa-star-o"></i>
              </label>
            	<input
                type="radio"
                id="rating-4"
                onChange={this.update('rating')}
                value={4}
              />
              <label htmlFor="rating-4"
                className={(this.state.rating===4 ? "checked" : "")}
              >
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
              </label>
            	<input
                type="radio"
                id="rating-3"
                onChange={this.update('rating')}
                value={3}
              />
              <label htmlFor="rating-3"
                className={(this.state.rating=== 3 ? "checked" : "")}
              >
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
              </label>
            	<input
                type="radio"
                id="rating-2"
                onChange={this.update('rating')}
                value={2}
              />
              <label htmlFor="rating-2"
                className={(this.state.rating=== 2 ? "checked" : "")}
              >
              	 <i className="fa fa-star"></i>
                 <i className="fa fa-star-o"></i>
              </label>
            	<input
                type="radio"
                id="rating-1"
                onChange={this.update('rating')}
                value={1}
              />
              <label htmlFor="rating-1"
                className={(this.state.rating=== 1 ? "checked" : "")}
              >
              	 <i className="fa fa-star"></i>
              </label>
            </div>

          </div>

          <div className='textarea-input'>
            <textarea id="body"
              value={this.state.body}
              onChange={this.update('body')}
              placeholder=" "
            />
            <label htmlFor='body'>Review Comment</label>
          </div>

          <div className="completion-checkboxes">

            <h5>Please indicate whether or not {this.props.worker.username} did the job:</h5>
            <div className='completed-input'>
              <input type="radio" id="completed"
                onChange={this.update('job_status')} value="fulfilled"
                checked={completion === "fulfilled"}
                />
              <label htmlFor='completed'>Yes</label>
            </div>

            <div className='completed-input'>
              <input type="radio" id="incomplete"
                onChange={this.update('job_status')} value="unfulfilled"
                checked={completion === "unfulfilled"}
                />
              <label htmlFor='incomplete'>No</label>
            </div>

          </div>

          <button type="submit">Leave Review</button>

        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobFeedbackForm);
