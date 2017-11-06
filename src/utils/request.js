import axios from 'axios';

class Request {
  get = (url, data, options = {}) => request({
    url,
    params: {
      ...data,
    },
    ...options,
  })

  post = (...args) => sendOtherThanGet('post', ...args);

  patch = (...args) => sendOtherThanGet('patch', ...args);

  delete = (...args) => sendOtherThanGet('delete', ...args);

  put = (...args) => sendOtherThanGet('put', ...args);
}

let request = options => new Promise((resolve, reject) => {
  axios({
    ...options,
  })
    .then(({ data, headers, status }) => {
      resolve(data, headers, status);
    })
    .catch((error) => {
      reject(error);
    });
});

let sendOtherThanGet = (method, url, data, options) => request({
  url,
  data,
  method,
  ...options,
});

export default new Request();
