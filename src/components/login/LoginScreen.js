import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../auth/auth';
import './LoginScreen.css';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(login)
  }

  return (
    <div className="login-container">
      <div className="login-box animate__animated animate__fadeIn">
          <h1 className="login-text">Login</h1>
          <button
            className="login-button"
            onClick={handleLogout} 
            >
            Login
          </button>
      </div>
       

    </div>
    
  )
}
