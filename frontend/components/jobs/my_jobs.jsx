import React from 'react';

import { hashHistory } from 'react-router';

import JobsList from './jobs_list';

class MyJobs extends React.Component {
  constructor(props) {
    super(props);
    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    this.props.fetchJobs();
  }

  componentWillReceiveProps(newProps) {
    if(this.props.currentUser === null && newProps.currentUser !== null) {
        newProps.fetchJobs();
    }
  }

  redirectTo(str) {
    return () => {
      hashHistory.push(`/jobs/${str}`);
    };
  }

  render() {
    const myOrderedJobs = this.props.myJobsArray.sort((a, b) => {
      const aDate = new Date(a.start_time);
      const bDate = new Date(b.start_time);
      return  aDate > bDate;
    });

    const past = [];
    const future = [];

    const now = new Date();

    myOrderedJobs.forEach((job) => {
      if (new Date(job.start_time) < now) {
        past.push(job);
      } else {
        future.push(job);
      }
    })

    let text = "Your Upcoming Jobs";
    let pastText = "Past Jobs You Have Accepted"
    if (this.props.currentUser) {
      if (this.props.currentUser.isWorker) {
        if (future.length === 0) {
          text = "You haven't accepted any upcoming jobs.";
        }
        if (past.length === 0) {
          pastText = "";
        }
      }
      return (
        <div className="jobs-index-wrapper">
          <h1>Your Jobs</h1>
          <div className="jobs-index">
            <h2>{text}</h2>
            <JobsList jobs={future} onClick={this.redirectTo} />
            <h2>{pastText}</h2>
            <JobsList jobs={past} onClick={this.redirectTo} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Please log in or sign up to post or view jobs.</h1>
        </div>
      );
    }
  }
}

export default MyJobs;
