import React, { useState } from 'react';
import { axiosWithAuth } from '../../../Utils/axiosWithAuth';

export default function AddFriend(props) {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: '',
  });
  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/friends', newFriend);
    window.location.replace('http://localhost:3000/home');
  };
  return (
    <>
      <form onSubmit={addFriend}>
        <label htmlFor='name'>
          Name:
          <input
            type='text'
            name='name'
            onChange={handleChange}
            value={newFriend.name}
          />
        </label>
        <label htmlFor='age'>
          Age:
          <input
            type='number'
            name='age'
            onChange={handleChange}
            value={newFriend.age}
          />
        </label>
        Email:
        <label htmlFor='email'>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={newFriend.email}
          />
        </label>
        <button>Add Friend</button>
      </form>
    </>
  );
}
