import customAxios from '../middleware/setHeader';

const getUsers = () => {
  customAxios()
    .get('http://127.0.0.1:4000/api/users')
    .then(res => {
      console.log('customAxios getUsers:', res.data);
      return res.data;
    })
    .catch(err => console.log(err));
};

export default getUsers;
