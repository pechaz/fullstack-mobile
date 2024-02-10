import axios, {AxiosResponse} from 'axios';

import {ITask} from '../../models';

export const getTasks = (): Promise<AxiosResponse<ITask[], any>> => {
  return axios.get('/v1/tasks');
};

export const getTask = (id: string): Promise<AxiosResponse<ITask, any>> => {
  return axios.get(`/v1/tasks/${id}`);
};

export const create = (
  data: Omit<ITask, 'id'>,
): Promise<AxiosResponse<ITask, any>> => {
  return axios.post('/v1/tasks', data);
};

export const update = (data: ITask): Promise<AxiosResponse<ITask, any>> => {
  const id = data.id;
  // @ts-ignore
  delete data.id;
  return axios.patch(`/v1/tasks/${id}`, data);
};

export const deleteTask = (id: string): Promise<AxiosResponse<ITask, any>> => {
  return axios.delete(`/v1/tasks/${id}`);
};
