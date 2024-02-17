import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {Button, Icon, List, ListItem, Layout} from '@ui-kitten/components';

import {ApplicationScreenProps, ITask, TaskStatus} from '../../models';
import useTasks from './useTasks';
import {styles} from './Tasks.style';
import {ScrollView} from 'react-native-gesture-handler';
import {TestHook} from '../../hooks';

const Tasks = ({navigation}: ApplicationScreenProps) => {
  // const {data} = useTasks();
  const {data} = TestHook.useTasks();

  const renderItemIcon = (item: ITask, props: any) => {
    return (
      <Icon
        {...props}
        name={
          item.status === TaskStatus.DONE
            ? 'checkmark-circle-2-outline'
            : 'settings-outline'
        }
      />
    );
  };

  const renderItemAccessory = (item: ITask) => (
    <Button
      size="tiny"
      onPress={() => {
        navigation.navigate('TaskDetail', {
          id: item.id,
        });
      }}>
      Edit
    </Button>
  );

  const renderItem = ({item, index}: {item: ITask; index: number}) => (
    <ListItem
      key={index}
      title={`${item.title}`}
      description={`${item.description}`}
      accessoryLeft={(props: any) => renderItemIcon(item, props)}
      accessoryRight={() => renderItemAccessory(item)}
    />
  );

  return (
    // <SafeAreaView>
    //   <Layout level="1" style={styles.container}>
    //     <Button onPress={() => navigation.push('Task')}>Add</Button>
    //     <List
    //       style={styles.wrapper}
    //       data={data?.data}
    //       renderItem={renderItem}
    //     />
    //   </Layout>
    // </SafeAreaView>

    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainWrapper}>
          {data?.data?.map((item, index: number) => (
            <View key={`test-item-${index}`} style={styles.testItem}>
              <View style={styles.testItemImage}>
                <Image
                  style={styles.testItemImage}
                  alt={`${item.first_name} ${item.last_name}`}
                  source={{
                    uri: item.avatar,
                  }}
                />
              </View>
              <View style={styles.testItemTextWrapper}>
                <Text
                  style={
                    styles.testItemTextHeader
                  }>{`${item.first_name} ${item.last_name}`}</Text>
                <Text style={styles.testItemTextDescription}>{item.email}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tasks;
