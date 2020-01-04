import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Logo from '../../death-to-kirby.png';

class Navbar extends Component {

  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
   const { activeItem } = this.state
    return(
      <Menu 
        inverted 
        stackable 
        size='massive'
        borderless='true'
      >
        <Menu.Item>
          <img src={Logo} alt="logo"/>
          <h1> Death to Kirby Travel</h1>
        </Menu.Item>
        <Menu.Item
          as= { Link }
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as= { Link }
          to='/trips'
          name='trips'
          active={activeItem === 'trips'}
          onClick={this.handleItemClick}
        >
          Trips
        </Menu.Item>
        <Menu.Item
          name='destinations'
          active={activeItem === 'destinations'}
          onClick={this.handleItemClick}
        >
          Destinations
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to='/plantrip'
          name='tripForm'
          active={activeItem === 'tripForm'}
          position='right'
          onClick={this.handleItemClick}
        >
          Plan a Trip
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar;