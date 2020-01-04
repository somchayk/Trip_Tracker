import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/shared/Navbar'
import Home from './components/pages/Home'
import NoMatch from './components/shared/NoMatch'
const App = () => (
  <div>
      <Navbar />
      <Switch>
        <Route to exact path='/' component={Home}/>
        <Route component={NoMatch}/>
      </Switch>
  </div>
)

export default App;
