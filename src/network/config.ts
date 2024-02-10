import axios from 'axios';
// import {API_URL} from '@env';

import {AuthService} from '.';
import {StorageUtil} from '../utils';

axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.request.use(config => {
  if (config.headers) {
    const token = StorageUtil.getStorage('access_token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      if (originalRequest.url.includes('/v1/auth/refresh-tokens')) {
        StorageUtil.removeStorage('refresh_token');
        StorageUtil.removeStorage('access_token');
        return Promise.reject(error);
      }

      const refreshToken = StorageUtil.getStorage('refresh_token');
      if (refreshToken) {
        return AuthService.refreshToken(String(refreshToken))
          .then(response => {
            StorageUtil.setStorage(
              'refresh_token',
              response.data.tokens.refresh.token,
            );
            StorageUtil.setStorage(
              'access_token',
              response.data.tokens.refresh.token,
            );
            originalRequest.headers[
              'Authorization'
            ] = `Bearer ${response.data.tokens.access.token}`;
            return axios(originalRequest);
          })
          .catch(() => {
            StorageUtil.removeStorage('refresh_token');
            StorageUtil.removeStorage('access_token');
            return Promise.reject(error);
          });
      }
    }

    return Promise.reject(error);
  },
);
