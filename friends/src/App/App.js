import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../Components/Nav/Nav';
import Login from '../Components/Body/LoginForm/Login';
import Home from '../Components/Body/Home/Home';
import AddFriend from '../Components/Body/AddFriends/AddFriend';
import PrivateRouter from '../Components/PrivateRouter';

function App() {
  return (
    <div className='App'>
      <Nav />

      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRouter exact path='/home' component={Home} />
        <PrivateRouter exact path='/addfriend' component={AddFriend} />
      </Switch>
    </div>
  );
}

export default App;
