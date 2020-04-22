import React from 'react';
import './nav.css';
import { Link, Redirect } from 'react-router-dom';

export default function Nav(props) {
  const token = localStorage.getItem('token');
  console.log(token);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload(true);
  };

  return (
    <section className='nav'>
      <ul>
        <li>
          {token ? (
            <div className='logoutwrap'>
              <Link className='link' onClick={logout}>
                Logout
              </Link>
              <Link className='link' to='/addfriend'>
                Add Friend
              </Link>
            </div>
          ) : null}
        </li>
        <li>
          <Link to='/home' className='link'>
            Home
          </Link>
        </li>
      </ul>
    </section>
  );
}
