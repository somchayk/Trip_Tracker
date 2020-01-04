import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Navbar from './components/shared/Navbar'
import Home from './components/pages/Home'
import NoMatch from './components/shared/NoMatch'
const App = () => (
  <div>
      <Navbar />
      <Container>
        <Switch>
          <Route to exact path='/' component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </Container>
  </div>
)

export default App;
