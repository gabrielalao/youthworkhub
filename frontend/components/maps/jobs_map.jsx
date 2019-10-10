import React from 'react';

import { withRouter } from 'react-router';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class JobsMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobMarkers: []
    }

    this.addHomeMarker = this.addHomeMarker.bind(this);
    this.filterForFutureOrMyJob = this.filterForFutureOrMyJob.bind(this);
  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 38.6398693, lng: -90.2934337 },
      zoom: 12
    }

    // navigator.geolocation.getCurrentPosition((loc) => {
    //   if (loc.coords.latitude) {
    //     this.map.setCenter(new google.maps.LatLng(loc.coords.latitude,
    //                                             loc.coords.longitude));
    //     this.addHomeMarker(loc.coords.latitude, loc.coords.longitude);
    //   }
    // }); THIS IS FOR ACTUAL USAGE, NOT DEMO; IT CENTERS THE MAP ON USER LOCATION

    this.map = new google.maps.Map(this.mapNode, mapOptions)

    google.maps.event.addListener(this.map, 'idle', () => {
      const mapBounds = this.map.getBounds();
      const northEast = mapBounds.getNorthEast();
      const southWest = mapBounds.getSouthWest();
      const bounds = {
        northEast: getCoordsObj(northEast),
        southWest: getCoordsObj(southWest)
      }
      const locFilter = { bounds };

      this.props.updateLocation(bounds);
      this.props.fetchJobs(locFilter);
    })

    // Marker images are pulled from the google Charts API
    // each visual marker corresponds to a specific job status
    const markers = {
      'pending': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%24|00FF00',
      'designated': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=J|FFFF00',
      'fulfilled': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|FF00FF',
      'unfulfilled': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=U|FF0000',
    }
    this.markerManager = new MarkerManager(this.map,
                                           this.handleMarkerClick.bind(this),
                                           markers);

    const filteredJobs = this.filterForFutureOrMyJob(this.props.jobsArray);

    this.markerManager.updateMarkers(filteredJobs);
  }

  componentWillReceiveProps(newProps) {
    this.markerManager.updateMarkers(this.filterForFutureOrMyJob(newProps.jobsArray));
  }

  addHomeMarker(lat, lng) {
    if (this.state.homeMarker) { this.state.homeMarker.setMap(null); }
    const image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    const otherImage = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: { lat, lng },
      label: 'H',
      icon: image
    })
    this.map.setZoom(13);
  }

  handleMarkerClick(job) {
    this.props.router.push(`jobs/${job.id}`)
  }

  filterForFutureOrMyJob(jobs) {
    const now = new Date();
    return jobs.filter((job) => (
      now <= new Date(job.start_time) && job.status === 'pending' ||
      (this.props.currentUser.isWorker && job.worker_id === this.props.currentUser.id)
    ));
  }

  render() {
    return (
      <div className='map-wrapper'>
        <h1> JOBS MAP </h1>
        <h4>Adjust the map to filter jobs by location.</h4>
        <div className="map" ref={ map => this.mapNode = map }
        ></div>
      </div>
    )
  }
}

export default withRouter(JobsMap);
