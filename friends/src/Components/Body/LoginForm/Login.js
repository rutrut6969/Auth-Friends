import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../../Utils/axiosWithAuth';

export default function Login(props) {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  let history = useHistory();
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth.post('/api/login', user).then((res) => {
      localStorage.setItem('token', JSON.stringify(res.data.payload));
      history.push('/home');
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className='form' onSubmit={login}>
      <label htmlFor='username'>
        Username:
        <input
          name='username'
          className='username'
          type='username'
          onChange={handleChange}
        />
      </label>
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          name='password'
          className='password'
          onChange={handleChange}
        />
      </label>
      <button type='submit'>Login!</button>
    </form>
  );
}
