import {useMutation} from '@tanstack/react-query';

import {AuthService} from '../network';

export function useLogin() {
  return useMutation({
    mutationFn: AuthService.login,
  });
}
