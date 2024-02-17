import './config';

export * as AuthService from './auth/Auth.service';
export type {
  IAuthInput,
  IAuthResponse,
  IAuthResponseError,
} from './auth/interfaces';

export * as TaskService from './task/Task.service';
export * as TestService from './test/Test.service';
