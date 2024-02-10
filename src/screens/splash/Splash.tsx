import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

import {ApplicationScreenProps} from '../../models';
import {styles} from './Splash.style';
import {StorageUtil} from '../../utils';

const Splash = ({navigation}: ApplicationScreenProps) => {
  useEffect(() => {
    const token = StorageUtil.getStorage('access_token');
    if (!token) {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }, 1000);
    } else {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Tasks'}],
        });
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <Layout>
        <View style={styles.container}>
          <Text>Sample Splash Here</Text>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Splash;
