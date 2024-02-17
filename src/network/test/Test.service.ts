import axios, {AxiosResponse} from 'axios';

import {ITest} from '../../models';

export const getTestApiItem = (): Promise<AxiosResponse<ITest[], any>> => {
  return axios.get('api/v2/users?size=100', {
    baseURL: 'https://random-data-api.com/',
  });
};
