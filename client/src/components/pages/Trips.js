import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import Locations from './Locations';

class Trips extends Component {

state = {
  trips: []
}

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => {
        this.setState({ trips: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  } 

  deleteTrip = (id) => {
    axios.delete(`api/trips/${id}`)
    .then ( res => {
      const { trips } = this.state
      this.setState({ trips: trips.filter( t => t.id !==id)})
    })
    .catch( err => {
      console.log(err)
    })
  }


  render () {
    return(
      <>
      <h1>Trips</h1>
      {
        this.state.trips.map(t => 
          <Card>
            {t.name}
            {t.final_destination}
            {t.start_date}
            {t.end_date}
            {t.expected_cost}
            <img src={t.img_url}/>
            <a onClick={() => this.deleteTrip(t.id)}>delete</a>
            <Locations {...t}/>
          </Card>
          
        )
      }
      </>
    )
  }
}

export default Trips
