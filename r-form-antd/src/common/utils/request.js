import axios from 'axios';
axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  },
);

const Request = {
  get: (url, params = {}) => axios.get(url, { params }),
  getLoading: async (url, params = {}) => {
    const promise = await axios.get(url, { params });
    return promise;
  },
  post: (url, params = {}, headers = null) => axios.post(url, params, headers),
  postLoading: async (url, params = {}, headers = null) => {
    const promise = await axios.post(url, params, headers);
    return promise;
  },
};

export default Request;
