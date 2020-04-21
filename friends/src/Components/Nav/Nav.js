import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <section className='nav'>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
      </ul>
    </section>
  );
}
