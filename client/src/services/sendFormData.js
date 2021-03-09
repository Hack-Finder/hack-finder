import axios from 'axios';

export const sendFormData = (formData, endpoint, method) => {
  return axios({
    url: endpoint,
    method: method,
    data: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
