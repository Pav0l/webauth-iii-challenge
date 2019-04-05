import axios from 'axios';

const loginUser = (username, password) => {
  axios
    .post('http://127.0.0.1:4000/api/login', { username, password })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('localToken', res.data.token);
    })
    .catch(err => console.error('Error: ', err));
};

export default loginUser;
