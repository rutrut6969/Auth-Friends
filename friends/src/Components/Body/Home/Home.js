import React, { useState, useEffect } from 'react';
import Card from './Card';
import './home.css';
import { axiosWithAuth } from '../../../Utils/axiosWithAuth';

export default function Home(props) {
  const [friends, setFriends] = useState({
    friends: [],
  });

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then((res) => {
        setFriends({
          ...friends,
          friends: res.data,
        });
        console.log(res.data);
        // console.log(friends);
      });
  }, []);
  return (
    <>
      <div className='home'>
        {friends.friends
          ? friends.friends.map((friend) => (
              <Card key={friend.name} friend={friend} />
            ))
          : null}
      </div>
    </>
  );
}
