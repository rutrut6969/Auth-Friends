import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../Components/Nav/Nav';
import Login from '../Components/Body/LoginForm/Login';
import Home from '../Components/Body/Home/Home';
import PrivateRouter from '../Components/PrivateRouter';

function App() {
  return (
    <div className='App'>
      <Nav />

      <Switch>
        <Route to='/login' component={Login} />
        <PrivateRouter to='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
