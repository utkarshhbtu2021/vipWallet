import axios from 'axios';
import config from '../config';
import URL from './url';

const api = {
  get: url => axios.get(URL[config.env].BASE_URL + url),
  getAuth: request =>
    axios.get(URL[config.env].BASE_URL + request.url, {
      headers: {
        Authorization: request.token,
        'Content-Type': 'application/json',
        Source: 'WEB',
      },
    }),

  post: request =>
    axios.post(URL[config.env].BASE_URL + request.url, request.data),
  postAuth: request =>
    axios.post(URL[config.env].BASE_URL + request.url, request.data, {
      headers: {Authorization: request.token, Source: 'WEB'},
    }),

  put: request =>
    axios.put(URL[config.env].BASE_URL + request.url, request.data),
  putAuth: request =>
    axios.put(URL[config.env].BASE_URL + request.url, request.data, {
      headers: {Authorization: request.token, Source: 'WEB'},
    }),
};

export default api;
