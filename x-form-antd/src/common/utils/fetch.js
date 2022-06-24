const FetchRequest = {
  post: async (url, params = {}, headers = {}) => {
    const response = await fetch(url, {
      method: 'POST', //  or 'PUT' *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(params), // body data type must match "Content-Type" header
    });
    return response.json();
  },
  get: async (url, params = {}, headers = {}) => {
    const arrs = [];
    for (const key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    if (arrs.length > 0) {
      url = url + '?' + arrs.join('&');
    }
    const response = await fetch(url, {
      method: 'GET', //  or 'PUT' *GET, POST, PUT, DELETE, etc.
      headers: {
        ...headers,
      },
    });
    return response.json();
  },
  upload: async (url, params = {}, headers = {}) => {
    const formData = new FormData();
    for (const key in params) {
      formData.append(key, params[key]);
    }
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headers,
      },
      body: formData,
    });
    return response.json();
  },
};

export default FetchRequest;
