/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Button,
  Datepicker,
  Icon,
  IndexPath,
  Input,
  Layout,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import {View} from 'react-native';

import {taskSchema} from './taskSchema';
import useTaskForm from './useTaskForm';
import {ITaskFormProps} from './TaskForm.interface';
import {styles} from './TaskForm.style';
import {TaskStatus} from '../../../../models';

const TaskForm = ({model}: ITaskFormProps) => {
  const {
    createIsPending,
    createMutate,
    updateMutate,
    updateIsPending,
    statusOptions,
    selectedStatus,
    setSelectedStatus,
  } = useTaskForm(model);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Layout level="1" style={styles.container}>
          <Formik
            initialValues={{
              title: model?.title ?? '',
              description: model?.description ?? '',
              status: model?.status ?? TaskStatus.IN_PROGRESS,
              dueDate: model?.dueDate ?? '',
            }}
            validationSchema={taskSchema}
            onSubmit={values => {
              model
                ? updateMutate({
                    ...values,
                    id: model.id,
                  })
                : createMutate(values);
            }}>
            {props => {
              const {
                handleChange,
                values,
                touched,
                errors,
                handleSubmit,
                setFieldValue,
              } = props;
              return (
                <View style={styles.form}>
                  <Input
                    placeholder="Title"
                    onChangeText={handleChange('title')}
                    label="Title"
                    caption={() => {
                      if (errors.title && touched.title) {
                        return <Text status="danger">{errors.title}</Text>;
                      } else {
                        return <></>;
                      }
                    }}
                    value={values.title}
                  />

                  <Input
                    placeholder="Description"
                    onChangeText={handleChange('description')}
                    label="Description"
                    caption={() => {
                      if (errors.description && touched.description) {
                        return (
                          <Text status="danger">{errors.description}</Text>
                        );
                      } else {
                        return <></>;
                      }
                    }}
                    value={values.description}
                    multiline
                  />

                  <Datepicker
                    style={styles.fullWidth}
                    label="DueDate"
                    caption={() => {
                      if (errors.dueDate && touched.dueDate) {
                        return (
                          <Text status="danger">{errors.description}</Text>
                        );
                      } else {
                        return <></>;
                      }
                    }}
                    placeholder="Pick Date"
                    date={values.dueDate ? new Date(values.dueDate) : undefined}
                    onSelect={nextDate => setFieldValue('dueDate', nextDate)}
                    accessoryRight={props => (
                      <Icon {...props} name="calendar" />
                    )}
                  />

                  <Select
                    style={styles.fullWidth}
                    selectedIndex={selectedStatus}
                    value={() => (
                      <Text>
                        {selectedStatus
                          ? statusOptions[selectedStatus.row].label
                          : ''}
                      </Text>
                    )}
                    onSelect={index => {
                      setSelectedStatus(index as IndexPath);
                      setFieldValue(
                        'status',
                        statusOptions[(index as IndexPath).row].value,
                      );
                    }}
                    label="Status"
                    caption={() => {
                      if (errors.status && touched.status) {
                        return <Text status="danger">{errors.status}</Text>;
                      } else {
                        return <></>;
                      }
                    }}>
                    {statusOptions.map((item, key) => (
                      <SelectItem key={key} title={item.label} />
                    ))}
                  </Select>

                  <Button
                    disabled={createIsPending || updateIsPending}
                    onPress={() => handleSubmit()}>
                    Submit
                  </Button>
                </View>
              );
            }}
          </Formik>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskForm;
