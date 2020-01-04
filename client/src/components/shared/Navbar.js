import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../../logo.svg';

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
        </Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          name='item1'
          active={activeItem === 'item1'}
          onClick={this.handleItemClick}
        >
          Item1
        </Menu.Item>
        <Menu.Item
          name='item2'
          active={activeItem === 'item2'}
          onClick={this.handleItemClick}
        >
          Item2
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar;