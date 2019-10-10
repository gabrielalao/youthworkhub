import React from 'react';

import { Link } from 'react-router';

import { takeJob } from '../../util/job_api_util';

import Review from '../reviews/review.jsx';

class JobShow extends React.Component {
  constructor(props) {
    super(props);
    this.takeJob = this.takeJob.bind(this);
    this.giveFeedback = this.giveFeedback.bind(this);
  }

  componentDidMount() {
    this.props.fetchJob().then(() => {
      if (this.props.currentUser && !this.props.currentUser.isWorker) {
        if (this.props.job.worker_id) {
          this.props.fetchWorker(this.props.job.worker_id);
        } else {
          this.props.clearWorker()
        }
      }
    });
  }

  takeJob() {
    this.props.openModal('acceptJobModal');
  }

  giveFeedback() {
    this.props.openModal('jobFeedbackModal');
  }

  render() {
    const job = this.props.job;
    if (this.props.currentUser) {

      if (job.id) {
        const date = new Date(job.start_time);
        const dateString = date.toDateString();
        const time = date
          .toLocaleTimeString('US-en')
          .replace(/:(\d{2}) (?=[AP]M)/, " ");

        let mapImage = "";

        if (job.lat) {
          let url = "https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=road&markers=color:red%7Clabel:J%7C"
          url += job.lat;
          url += ",";
          url += job.lng;
          url += "&zoom=13&key=AIzaSyAn-cgC4Fw4G8rHDvZfbjUnjzzv-U7uefs"
          mapImage = <img alt="map" src={url} />
        }

        let acceptButton = "";
        let isWorker = false;

        if (this.props.currentUser) {
          if (this.props.currentUser.isWorker) { isWorker = true; }
          if (this.props.currentUser.isWorker &&
              this.props.job.status === 'pending') {
              acceptButton = <button className='accept-job'
                onClick={this.takeJob}
                >Accept Job</button>;
          }
        }

        let feedbackButton = "";

        if (this.props.currentUser &&
            this.props.job.status !== 'pending' &&
            date < new Date() ) {
            feedbackButton = <button className='give-feedback'
                              onClick={this.giveFeedback}
                              >{this.props.job.review ?
                               "Edit Review" :
                               "Give Feedback"}
                             </button>;
        }

        let review = "";
        if(this.props.job.review) {
          review = <Review review={this.props.job.review} />;
        }

        let status = this.props.job.status;
        if (this.props.worker && status !== 'pending') {
          if (this.props.worker && status === 'designated') {
            status = `designated to ${this.props.currentUser.isWorker ?
                                      this.props.currentUser.username :
                                      this.props.worker.username}`;
          } else if (this.props.worker){
            status = `${status} by ${this.props.currentUser.isWorker ?
                                      this.props.currentUser.username :
                                      this.props.worker.username}`;
          }
        }

        return (
          <div className='job-show'>
            <div className='job-show-details'>
              <Link to="/jobs">Back to all Jobs</Link>
              <h2><span>{job.job_type}
              </span> Job <span>{dateString}</span></h2>

              <table>
                <tbody>
                  <tr>
                    <th>Type of work</th>
                    <th>{job.job_type}</th>
                  </tr>

                  <tr>
                    <td>description: </td>
                    <td>{job.description}</td>
                  </tr>

                  <tr>
                    <td>address: </td>
                    <td>{(job.address) ? job.address :
                        "This job's address was not specified'."}</td>
                    </tr>

                    <tr>
                      <td>start time: </td>
                      <td>{time}</td>
                    </tr>

                    <tr>
                      <td>hourly wage: </td>
                      <td>${job.wage} per hour</td>
                    </tr>

                    <tr>
                      <td>duration of job: </td>
                      <td>{job.duration} hours</td>
                    </tr>

                    <tr>
                      <td>total cost: </td>
                      <td>${job.cost}</td>
                    </tr>
                    <tr>
                      <td>status: </td>
                      <td>{status}</td>
                    </tr>
                </tbody>

              </table>
            </div>
            <div className='static-map'>
              {mapImage}
            </div>
            { review }
            { isWorker ?
              acceptButton :
              feedbackButton }
          </div>
        );
      } else {
        return (
          <div className="job-show empty">
            <h2>Information about the job you seek is not available.</h2>
          </div>
        );
      }

    } else {
      return (
        <div className="empty">
          <div className="workers-index">
            <h1>Please log in or sign up to view jobs.</h1>
          </div>
        </div>
      )
    }
  }
}

export default JobShow;
