import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const logOut = () => {
    localStorage.removeItem('localToken');
  };

  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </nav>
      <button onClick={logOut}>
        <NavLink to='/'>Log out</NavLink>
      </button>
    </div>
  );
}
