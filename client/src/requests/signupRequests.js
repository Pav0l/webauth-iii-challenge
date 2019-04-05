import axios from 'axios';

const createNewUser = (username, department, password) => {
  console.log('sendin axios request');
  axios
    .post('http://127.0.0.1:4000/api/register', {
      username,
      department,
      password,
    })
    .then(res => console.log(res.data))
    .catch(err => console.error('Error: ', err));
};

export default createNewUser;
