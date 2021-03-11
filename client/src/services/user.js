import axios from 'axios';

const getUserDetails = (id) => {
  return axios
    .get(`/api/users/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = (id) => {
  return axios
    .delete(`/api/users/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getUserDetails, deleteUser };
