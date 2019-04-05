import React from 'react';
// import getUsers from '../requests/usersRequests';
import customAxios from '../middleware/setHeader';

export default class Users extends React.Component {
  state = {
    users: '',
  };

  componentDidMount() {
    this.getUsersInDepartment();
  }

  getUsersInDepartment = () => {
    customAxios()
      .get('http://127.0.0.1:4000/api/users')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <h4>These are my colleagues:</h4>
        <div>
          {users ? (
            users.map(user => (
              <div key={user.user_id}>
                <div>Name: {user.username}</div>
                <div>Department: {user.department}</div>
              </div>
            ))
          ) : (
            <div>Loading users</div>
          )}
        </div>
      </div>
    );
  }
}
