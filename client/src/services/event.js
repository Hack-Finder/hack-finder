import axios from 'axios';

const getAllEvents = () => {
  return axios
    .get('/api/events/')
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllEvents };
