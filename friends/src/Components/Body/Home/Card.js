import React from 'react';

export default function Card(props) {
  return (
    <>
      <div className='card'>
        <h3>{props.friend.name}</h3>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
      </div>
    </>
  );
}
