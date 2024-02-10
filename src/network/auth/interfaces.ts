import {IUser} from '../../models';

export interface IAuthInput {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  tokens: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
}

export interface IAuthResponseError {
  message: string;
  code: number;
}
