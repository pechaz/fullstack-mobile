import React from 'react';
import {View} from 'react-native';
import {Spinner} from '@ui-kitten/components';

import {TaskForm} from '../../components/atomic/molecules';
import useTaskDetail from './useTaskDetail';
import {ApplicationScreenProps} from '../../models';

const Task = ({route}: ApplicationScreenProps) => {
  const {id} = route.params!;
  const {data, isFetching} = useTaskDetail(id);

  if (isFetching) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }
  return <TaskForm model={data?.data} />;
};

export default Task;
