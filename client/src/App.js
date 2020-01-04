import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Navbar from './components/shared/Navbar'
import Home from './components/pages/Home'
import Trips from './components/pages/Trips'
import NoMatch from './components/shared/NoMatch'
import TripForm from './components/pages/TripForm';
const App = () => (
  <div>
      <Navbar />
      <Container>
        <Switch>
          <Route to exact path='/' component={Home}/>
          <Route to exact path='/trips' component={Trips}/>
          <Route to exact path='/plantrip' component={TripForm}/>
          <Route component={NoMatch}/>
        </Switch>
      </Container>
  </div>
)

export default App;
