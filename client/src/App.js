import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Navbar />

      <h3>Welcome to the home page</h3>

      <Route path='/signup' component={Signup} />

      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
