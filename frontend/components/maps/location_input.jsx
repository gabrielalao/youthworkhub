import React from 'react'

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: null
    }

    this.addMarker = this.addMarker.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 38.6398693, lng: -90.2934337 },
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    navigator.geolocation.getCurrentPosition((loc) => {
      if (loc.coords.latitude) {
        this.map.setCenter(new google.maps.LatLng(loc.coords.latitude,
                                                loc.coords.longitude));
      }
    });

    google.maps.event.addListener(this.map, 'click', event => {
      this.addMarker(event.latLng);
    });
  }

  componentWillReceiveProps(nextProps) {
    const coords = nextProps.markerPos;
    if (coords) {
      this.placeMarker(coords);
      this.map.setCenter(coords);
    }
  }

  placeMarker(coords) {
    if (this.state.marker) { this.state.marker.setMap(null); }
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      title: this.props.markerTitle
    })
    this.setState({ marker })
  }

  addMarker(coords) {
    this.placeMarker(coords);
    this.props.onMapClick(getCoordsObj(coords))
  }

  render() {
    return (
      <div className='map-wrapper'>
        <div className="map" ref={ map => this.mapNode = map }></div>
      </div>
    )
  }
}

export default LocationInput;
