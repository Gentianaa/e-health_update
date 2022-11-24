import React from 'react';
import { UserAuth } from '../context/AuthContext';
import '../App.css';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='account'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <div>
        <p>Navigation bar</p>
      <ul>
        <li>
        <a href="/video">YouTube video</a>
        </li>
        <li>
          <a href="/patient">Patient info</a>
        </li>
        <li>
        <a href="/feed">RSS feed</a>
        </li>
      </ul>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>
  );
};

export default Account;
