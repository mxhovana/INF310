import React, { Component } from 'react';
import './destinations.css';

class destinations extends Component {
  constructor() {
    super();
    this.state = {
      destinations: []
    };
  }

  componentDidMount() {
    fetch('/api/destinations')
      .then(res => res.json())
      .then(destinations => this.setState({destinations}, () => console.log('Destinations fetched...', destinations)));
  }

  render() {
    return (
      <div>
        <h2>Destinations</h2>
        <ul>
        {this.state.destinations.map(destination => 
          <li key={destination.id}>{destination.City} {destination.Country}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Destinations;