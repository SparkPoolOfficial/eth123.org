import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(res => {
  return res.data;
});

export function get(url, params) {
  return instance({
    method: 'get',
    url,
    params,
  });
}
