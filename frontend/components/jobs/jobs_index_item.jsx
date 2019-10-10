import React from 'react';

const JobsIndexItem = ({job, onClick}) => {
  const date = new Date(job.start_time);
  const dateString = date.toDateString();
  const time = date
    .toLocaleTimeString('US-en')
    .replace(/:(\d{2}) (?=[AP]M)/, " ");
  const hrs = job.duration === 1 ? 'hr' : 'hrs';
  const typeStr = job.job_type.charAt(0).toUpperCase() + job.job_type.slice(1);
  let reviewFlag = "";
  if (new Date() > date && job.status === 'designated') {
    reviewFlag = <div className='flag-wrapper'>
                   <div className='review-flag'>Needs Review</div>
                 </div>;
  }
  let jobTakenFlag = "";
  if (new Date() < date && job.status === 'designated') {
    jobTakenFlag = <div className='flag-wrapper'>
                   <div className='job-taken-flag'>Job Taken</div>
                 </div>;
  }
  return (
    <div className={"jobs-index-item"} onClick={onClick}>
      {reviewFlag}
      {jobTakenFlag}
      <div className="top">
          <h3>{typeStr} Job</h3>
          <h3>Total: ${job.cost}</h3>
      </div>
      <div className="info">
        <div className='status-details'>
          <h4>{dateString}</h4>
          <h5>Starts at: {time}</h5>
        </div>
        <div className='cost-details'>
          <h4>{job.duration} {hrs}</h4>
          <h5>at ${job.wage}/hr</h5>
        </div>
      </div>

      <div className="address">
        <h5>{job.address ? job.address : 'Address not given'}</h5>
        <p>(click for more info)</p>
      </div>
    </div>
  );
};

export default JobsIndexItem;
