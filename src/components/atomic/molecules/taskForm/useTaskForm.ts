import {useEffect, useState} from 'react';
import {AxiosError} from 'axios';
import {useNavigation} from '@react-navigation/native';
import {IndexPath} from '@ui-kitten/components';

import {AlertHook, TaskHook} from '../../../../hooks';
import {IAuthResponseError} from '../../../../network';
import {ITask, TaskStatus} from '../../../../models';

const useTaskForm = (model?: ITask) => {
  const {alert} = AlertHook();
  const navigation = useNavigation();
  const [selectedStatus, setSelectedStatus] = useState<IndexPath | undefined>();
  const {
    mutate: createMutate,
    isPending: createIsPending,
    isSuccess: createSuccess,
    isError: createHasError,
    error: createError,
  } = TaskHook.useCreate();

  const {
    mutate: updateMutate,
    isPending: updateIsPending,
    isSuccess: updateSuccess,
    isError: updateHasError,
    error: updateError,
  } = TaskHook.useUpdate();

  const statusOptions = [
    {
      label: 'In Progress',
      value: String(TaskStatus.IN_PROGRESS),
    },
    {
      label: 'Done',
      value: String(TaskStatus.DONE),
    },
  ];

  useEffect(() => {
    if (createSuccess) {
      alert({
        message: 'task create success',
        variant: 'success',
      });
      navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createSuccess]);

  useEffect(() => {
    if (updateSuccess) {
      alert({
        message: 'task update success',
        variant: 'success',
      });
      navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateSuccess]);

  useEffect(() => {
    if (createHasError) {
      alert({
        message: (createError as AxiosError<IAuthResponseError>).response?.data
          ?.message!,
        variant: 'error',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createHasError, createError]);

  useEffect(() => {
    if (updateHasError) {
      alert({
        message: (updateError as AxiosError<IAuthResponseError>).response?.data
          ?.message!,
        variant: 'error',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateHasError, updateError]);

  useEffect(() => {
    if (model) {
      const index = new IndexPath(model.status);
      setSelectedStatus(index);
    } else {
      const index = new IndexPath(0);
      setSelectedStatus(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    createMutate,
    createIsPending,
    updateIsPending,
    updateMutate,
    statusOptions,
    setSelectedStatus,
    selectedStatus,
  };
};

export default useTaskForm;
