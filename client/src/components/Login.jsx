import React from 'react';
import loginUser from '../requests/loginRequests';

const emptyForm = {
  username: '',
  password: '',
};

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  buttonClick = event => {
    event.preventDefault();

    const { username, password } = this.state;

    loginUser(username, password);

    this.setState(emptyForm);
  };

  render() {
    return (
      <form autoComplete='off' onSubmit={this.buttonClick}>
        <input
          name='username'
          placeholder='username'
          type='text'
          onChange={this.onInputChange}
          value={this.state.username}
        />

        <input
          name='password'
          placeholder='password'
          type='password'
          onChange={this.onInputChange}
          value={this.state.password}
        />

        <div>
          Don't have an account? <a href='/signup'>Sign up!</a>
        </div>

        <button type='submit' onClick={this.buttonClick}>
          Log in
        </button>
      </form>
    );
  }
}
