import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

class TripForm extends Component {

 state = { name: '', final_destination: '',start_date: '', end_date: '', expected_cost: '', img_url: '' }

 addTrip = (trip) => {
  axios.post('/api/trips', trip)
  .then( res => {
    const { trips } = this.state
    this.setState({ trips: [...trips, res.data]})
  })
  .catch( err => {
    console.log(err)
  })
}

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSumbit = (e) => {
    e.preventDefault()
    this.addTrip(this.state)
    this.setState({ name: '', final_destination: '',start_date: '', end_date: '', expected_cost: '', img_url: '' })
    this.props.history.push('/trips')
    }

  render() {
    const { name, final_destination, start_date, end_date, expected_cost, img_url} = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Name'
        />
        <Form.Input
          name='final_destination'
          value={final_destination}
          onChange={this.handleChange}
          label='Final Festination'
        />        
        <Form.Input
          name='img_url'
          value={img_url}
          onChange={this.handleChange}
          label='Image Link'
        />        
        <Form.Input
          type={<input type='date'/>}        
          name='start_date'
          value={start_date}
          onChange={this.handleChange}
          label='Start Date'
        />
        <Form.Input
          type={<input type='date'/>}
          name='end_date'
          value={end_date}
          onChange={this.handleChange}
          label='End Date'
        />
        <Form.Input
          type={<input type='number'/>}
          name='expected_cost'
          value={expected_cost}
          onChange={this.handleChange}
          label='Expected Cost'
        /> 
      <Button type='sumbit' onClick={this.handleSumbit}>Sumbit</Button> 
      </Form>               
    )
  }
}
export default TripForm;