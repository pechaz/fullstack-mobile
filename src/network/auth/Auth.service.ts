import axios, {AxiosResponse} from 'axios';

import {IAuthInput, IAuthResponse, IAuthResponseError} from '..';

export const login = (
  data: IAuthInput,
): Promise<AxiosResponse<IAuthResponse, IAuthResponseError>> => {
  return axios.post('/v1/auth/login', data, {
    withCredentials: false,
  });
};

export const refreshToken = (
  refreshToken: string,
): Promise<AxiosResponse<IAuthResponse, IAuthResponseError>> => {
  return axios.post(
    '/v1/auth/refresh-tokens',
    {
      refreshToken,
    },
    {
      withCredentials: false,
    },
  );
};
