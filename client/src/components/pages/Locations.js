import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Locations extends Component {

  state = { locations: [], adding: false }
  
  componentDidMount() {
    axios.get(`/api/trips/${this.props.id}/locations`)
      .then( res => {
        this.setState({ locations: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  } 

  // addLocation = (trip_id) => {
  //   axios.post(`/api/trips/${trip_id}/locations`, location)
  //   .then( res => {
  //     const { locations } = this.state
  //     this.setState({ locations: [...locations, res.data] })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  // deleteLocation = (trip_id, id) => {
  //   axios.delete(`/api/trips/${trip_id}/locations/${id}`)
  //   .then( res => {
  //     const { locations } = this.state
  //     this.setState({locations: locations.filter( l => l.id !== id)})
  //   })
  //   .catch( err => {
  //     console.log(err)
  //   })
  // }

  // updateLocation = (trip_id, id) => {
  //   axios.put(`/api/trips/${trip_id}/locations/${id}`, location)
  //     .then( res => {
  //       const { locations } = this.state.locations.map (l =>{
  //         if (l.id === id) {
  //           return res.data
  //         }
  //         return l
  //       })
  //       this.setState({ locations })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }


  render(){
    const { locations } = this.state
    return(
      <>
      Locations:
      {
        locations.map( l => 
          <Link>{l.name}</Link>
          )
      }
      </>
    )
  }
}

export default Locations