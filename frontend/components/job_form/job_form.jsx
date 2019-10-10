import React from 'react';
import merge from 'lodash/merge';

import { DateTimePicker } from 'react-widgets';

import Moment from 'moment';

import momentLocalizer from '../../../node_modules/react-widgets/lib/localizers/moment';
momentLocalizer(Moment);

import LocationInput from '../maps/location_input';

import CloseModalButton from '../close_modal_button/close_modal_button';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({
      user_id: this.props.currentUser.id,
      description: "",
      job_type: "",
      address: "",
      duration: "",
      wage: "",
      start_time: "",
      lat: "",
      lng: "",
      cost: ""
    }, this.props.currentJob);

    this.geocoder = new google.maps.Geocoder();
    this.markerPos = null;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  componentDidMount() {
    if (!this.hasOwnProperty('autocomplete')) {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.refs.addressInput, {types: ['geocode']}
      );
    }
    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      const place = this.autocomplete.getPlace();
      const loc = place.geometry.location;
      this.markerPos = loc;

      this.setState({ lat: loc.lat(),
                      lng: loc.lng(),
                      address: place.formatted_address })
    })
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value}, () => {
        const wage = parseInt(this.state.wage);
        const duration = parseInt(this.state.duration);
        if (wage !== 0 && !isNaN(wage) &&
        duration !== 0 && !isNaN(duration)) {

          const cost = wage * duration;
          this.setState({ cost });
        }
      });
    };
  }

  setLocation(coords) {
    this.geocoder.geocode(({ latLng:coords }), (res, status) => {
      if (status === "OK") {
        this.setState({ address: res[0].formatted_address });
        this.setState({ lat: coords.lat, lng: coords.lng });
      }
    })
  }

  setDate(data) {
    const date = new Date(data);
    this.setState({ start_time: date.toISOString() })
  }

  handleSubmit(e) {
    e.preventDefault();

    if( this.state.description === ""||
        this.state.job_type === ""||
        this.state.address === ""||
        this.state.duration === ""||
        this.state.wage === ""||
        this.state.start_time === ""||
        this.state.cost === "") {
          this.props.frontendErrors(["form field can't be blank"]);
    } else {
      if (this.props.currentJob) {
        this.props.editJob(this.state)
          .then(this.props.closeModal());
      } else {
        const id = this.props.currentUser.id;
        this.props.addJob(merge(this.state, { user_id: id}))
          .then(this.props.closeModal());
      }
    }
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul className="error-list">
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    let text = this.props.currentJob ? "Update Job" : "Add Job";

    const defaultDate = this.state.start_time === "" ? null :
                              new Date(this.state.start_time);

    return (
      <div className='form'>

        <CloseModalButton modalName={'jobFormModal'} />

        <h2>{text}</h2>

        {(errors.length > 0) ? errList : null }

        <form onSubmit={this.handleSubmit} id='job-form'>

          <div className='textarea-input'>
            <textarea id="description"
              onChange={this.update('description')}
              value={this.props.description}
              placeholder=" "
            />
            <label htmlFor='description'>Describe Job</label>
          </div>

          <div className='select-input'>
            <select name="job_type"
                    onChange={this.update('job_type')}>
              <option>select one</option>
              <option value="art">art</option>
              <option value="baby-sitting">baby-sitting</option>
              <option value="cleaning">cleaning</option>
              <option value="computer work">computer work</option>
              <option value="gardening">gardening</option>
              <option value="kitchen work">kitchen work</option>
              <option value="lawn-mowing">lawn-mowing</option>
              <option value="music">music</option>
              <option value="pet-care">pet-care</option>
              <option value="tutoring">tutoring</option>
              <option value="yard-work">yard-work</option>
            </select>
          </div>


          <div className='location-input'>
            <h3>Click on the map or type in address below</h3>
            <LocationInput
              markerTitle='Job Location'
              onMapClick={this.setLocation}
              markerPos={this.markerPos}
            />
          </div>

          <div className='text-input'>
            <input type="text"
              id="address"
              ref="addressInput"
              placeholder=" "
              onChange={this.update('address')}
              value={this.state.address}
              />
            <label htmlFor='address'>Address</label>
          </div>

          <div className='react-widget'>
            <label htmlFor='start-time'>Start time</label>
            <DateTimePicker
              defaultValue={defaultDate}
              onChange={this.setDate}
              min={ new Date() }
            />
          </div>

          <div className='number-input'>
            <div>
              <label htmlFor='duration'>Duration (in hrs)</label>
            </div>
            <div>
              <input type="number"
                id="duration"
                onChange={this.update('duration')}
                value={this.state.duration}
                min="1"
                step="1"
                />
            </div>
          </div>

          <div className='number-input'>
            <div>
              <label htmlFor='wage'>Wage ($/hr)</label>
            </div>
            <div>
              <input type="number"
                id="wage"
                onChange={this.update('wage')}
                value={this.state.wage}
                min="8"
                step="1"
              />
            </div>
          </div>

          <div className='checkbox-input'>
            <div className='cost-amount'>
              <h3>total cost: ${this.state.cost}</h3>
            </div>

            <div className='accept-cost'>
              <input type="checkbox"
                id="accept-cost"
                defaultChecked={false}
                required
              />
              <label htmlFor='accept-cost'>Check to agree: you will pay
                this amount when the service is rendered.
              </label>
            </div>

          </div>

          <button type="submit">{text}</button>

        </form>
      </div>
    );
  }
}

export default JobForm;
