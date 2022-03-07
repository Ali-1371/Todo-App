import axios from 'axios';
import { constant } from '../configs/constants';

const httpRequest = (method, url, params, data) => {
  const axiosInstance = axios.create({
    baseURL: 'https://react-todo-1380d-default-rtdb.firebaseio.com/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return axiosInstance({ method, url, params, data });
};

export const getRequest = (url, params) =>
  httpRequest(constant.restfulVerbs.get, url, params);

export const postRequest = (url, data) =>
  httpRequest(constant.restfulVerbs.post, url, {}, data);

export const putRequest = (url, data) =>
  httpRequest(constant.restfulVerbs.put, url, {}, data);

export const deleteRequest = (url) =>
  httpRequest(constant.restfulVerbs.delete, url);
