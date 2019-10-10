import React from 'react';
import debounce from 'lodash/debounce';

class JobsFilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTypeFilters: [],
      minWage: 8,
    }

    this.setFilter = this.setFilter.bind(this);
    this.setWage = this.setWage.bind(this);
    this.handleWageChange = debounce(this.handleWageChange, 300).bind(this);
  }

  setFilter(e) {
    let mutibleFilters = this.state.jobTypeFilters;
    if (this.state.jobTypeFilters.includes(e.target.value)) {
      const itemIdx = mutibleFilters.indexOf(e.target.value);
      mutibleFilters.splice(itemIdx, 1);
      this.setState({ jobTypeFilters: mutibleFilters });
    } else {
      mutibleFilters.push(e.target.value);
      this.setState({ jobTypeFilters: mutibleFilters });
    }
    this.props.updateJobTypes(mutibleFilters);
  }

  setWage(e) {
    // console.log(e.target.value);
    const minWage = e.target.value
    this.setState({ minWage: minWage })
    this.handleWageChange(minWage);
  }

  handleWageChange(wage) {
    this.props.updateWageFilter(wage);
  }

  render() {
    const job_types = ["art",
                       "baby-sitting",
                       "cleaning",
                       "computer work",
                       "gardening",
                       "kitchen work",
                       "lawn-mowing",
                       "music",
                       "pet-care",
                       "tutoring",
                       "yard-work"];

    const jobTypeCheckboxes = job_types.map((job_type) => (
      <div className='filter-checkbox'
           key={job_type}
      >
        <input
          id={job_type}
          type='checkbox'
          defaultChecked={false}
          defaultValue={job_type}
          onChange={this.setFilter}
          />
        <label htmlFor={job_type}>{job_type}</label>
      </div>
    ))
    return (
      <form className='jobs-filter-form'>
        <h2>Filter by...</h2>
        <h4>Job Type</h4>
        <div className='job-types'>
          {jobTypeCheckboxes}
        </div>
        <h4>Minimum Wage</h4>
        <div className='wage'>
          <label
            htmlFor='min-wage'
            >${this.state.minWage}/hr</label><br />
          <input
            id='min-wage'
            type='range'
            min='8'
            max='25'
            defaultValue={8}
            onChange={this.setWage}
          />
        </div>
      </form>
    );
  }
}

export default JobsFilterForm;
