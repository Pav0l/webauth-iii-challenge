import React from 'react';
import createNewUser from '../requests/signupRequests';

const emptyForm = {
  username: '',
  password: '',
  department: '',
};

export default class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    department: '',
  };

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  buttonClick = event => {
    event.preventDefault();

    const { username, department, password } = this.state;

    createNewUser(username, department, password);

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
          name='department'
          placeholder='department'
          type='text'
          onChange={this.onInputChange}
          value={this.state.department}
        />

        <input
          name='password'
          placeholder='password'
          type='password'
          onChange={this.onInputChange}
          value={this.state.password}
        />

        <div>
          Already have an account? <a href='/login'>Log in!</a>
        </div>

        <button type='submit' onClick={this.buttonClick}>
          Sign up
        </button>
      </form>
    );
  }
}
