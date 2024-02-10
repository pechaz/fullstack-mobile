import {useEffect, useState} from 'react';

import {TaskHook} from '../../hooks';

const useTasks = () => {
  const [deletingIndex, setDeletingIndex] = useState(-1);
  const {data, refetch} = TaskHook.useTasks();
  const {mutate, isSuccess, isPending} = TaskHook.useDelete();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return {
    data,
    refetch,
    mutate,
    isPending,
    deletingIndex,
    setDeletingIndex,
  };
};

export default useTasks;
