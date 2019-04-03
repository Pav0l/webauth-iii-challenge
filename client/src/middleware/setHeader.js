import axios from 'axios';

const customAxios = () => {
  const token = localStorage.getItem('localToken');

  const setHeader = axios.create({
    headers: {
      'Content-Type': 'text',
      Authorization: token,
    },
  });

  return setHeader;
};

export default customAxios;
