import axios from 'axios';

export const sendFormData = (formData) => {
  axios({
    url: '/api/events',
    method: 'POST',
    data: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};
