import React from 'react';

import { hashHistory } from 'react-router';

import JobsIndexItem from './jobs_index_item';

const JobsList = ({jobs, onClick}) => {
  const  jobsArray = jobs.map((job) => (
    <JobsIndexItem className='jobs-index-item'
                   key={job.id}
                   job={job}
                   onClick={onClick(job.id)}
    /> )
  );

  return(
    <div className='jobs-list'>
      {jobsArray}
    </div>
  );
};

export default JobsList;
