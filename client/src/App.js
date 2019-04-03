import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Components
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Users from './components/Users';

const Welcome = () => {
  return <h3>Welcome to the home page</h3>;
};

function App() {
  return (
    <div>
      <Navbar />

      <Route path='/' exact component={Welcome} />

      <Route path='/signup' component={Signup} />

      <Route path='/login' component={Login} />

      <Route
        path='/users'
        render={pr =>
          localStorage.getItem('localToken') ? (
            <Users {...pr} />
          ) : (
            <Redirect to='/login' />
          )
        }
      />
    </div>
  );
}

export default App;
