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

const getEventDetails = (id) => {
  return axios
    .get(`/api/events/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllEvents, getEventDetails };
