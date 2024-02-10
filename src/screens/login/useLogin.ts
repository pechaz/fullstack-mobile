import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AxiosError} from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';

import {AlertHook, AuthHook} from '../../hooks';
import {StorageUtil} from '../../utils';
import {handleLogin} from '../../redux/auth';
import {IAuthResponseError} from '../../network';
import {ApplicationStackParamList} from '../../models';

const useLogin = (
  navigation: StackNavigationProp<
    ApplicationStackParamList,
    keyof ApplicationStackParamList,
    undefined
  >,
) => {
  const dispatch = useDispatch();
  const {alert} = AlertHook();
  const {mutate, isPending, isSuccess, data, isError, error} =
    AuthHook.useLogin();

  useEffect(() => {
    if (isSuccess) {
      const accessToken = data.data.tokens.access.token;
      const refreshToken = data.data.tokens.refresh.token;
      StorageUtil.setStorage('access_token', accessToken);
      StorageUtil.setStorage('refresh_token', refreshToken);
      dispatch(
        handleLogin({
          isLogin: true,
        }),
      );
      navigation.replace('Tasks');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      alert({
        message: (error as AxiosError<IAuthResponseError>).response?.data
          ?.message!,
        variant: 'error',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error]);

  return {mutate, isPending};
};

export default useLogin;
