export const jobsArray = ({jobs}) => Object.keys(jobs).map(key => jobs[key]);

export const myJobsArray = ({jobs}) => {
  let arr = [];
  const keys = Object.keys(jobs);
  keys.forEach((k) => {
    if(jobs[k].status === 'designated') {
      arr.push(jobs[k]);
    }
  });
  return arr;
};

export const workersArray = ({workers}) => (
  Object.keys(workers).map(key => workers[key])
);
