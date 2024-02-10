import {TaskHook} from '../../hooks';

const useTaskDetail = (id: string) => {
  const {data, isFetching} = TaskHook.useTask(id);

  return {
    data,
    isFetching,
  };
};

export default useTaskDetail;
