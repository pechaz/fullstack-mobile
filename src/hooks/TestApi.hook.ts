import {useQuery} from '@tanstack/react-query';

import {useRefreshOnFocus} from './RefreshOnFocus';
import {TestService} from '../network';

export const useTasks = () => {
  const {data, error, isFetching, isLoading, isError, isSuccess, refetch} =
    useQuery({
      queryKey: ['test'],
      queryFn: TestService.getTestApiItem,
      retry: false,
      refetchOnWindowFocus: false,
    });

  useRefreshOnFocus(refetch);
  return {
    data,
    error,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
