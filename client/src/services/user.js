import axios from 'axios';

const getUserDetails = (id) => {
  console.log('getUserDetails called')
  
  return axios
    .get(`/api/users/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};


export { getUserDetails };