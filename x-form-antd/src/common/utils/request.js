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
  get: async (url, params = {}, headers = {}) => {
    return await axios.post(
      url,
      { params },
      {
        headers: {
          ...headers,
        },
      },
    );
  },
  post: async (url, params = {}, headers = {}) => {
    return await axios.post(url, params, {
      headers: {
        ...headers,
      },
    });
  },
  uplaod: async (url, params = {}, headers = {}) => {
    // 拼接formDAta
    const formData = new FormData();
    for (const key in params) {
      formData.append(key, params[key]);
    }
    return await axios.post(url, formData, {
      headers: {
        ...headers,
        'Content-Type': 'application/x-www-form-urlencoded', // 不进
      },
    });
  },
};

export default Request;
