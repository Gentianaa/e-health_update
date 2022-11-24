import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import GithubButton from 'react-github-login-button';
import { TwitterLoginButton  } from "react-social-login-buttons";
//import TwitterButton from "react-twitter-button";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';


const Signin = () => {
  const { googleSignIn, githubSignIn, twitterSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      await githubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTwitterSignIn = async () => {
    try {
      await twitterSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);
  

  return (
    <div className='main'>
      <h1>Sign in</h1>
      <p>To start your session</p>
      <div className='max-w-[24px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
      <div className='max-w-[24px] m-auto py-4'>
        <GithubButton onClick={ handleGitHubSignIn } />
      </div>
      <div className='twitter'>
        <TwitterLoginButton onClick={handleTwitterSignIn} />
      </div>
    </div>
  );
};


export default Signin;
