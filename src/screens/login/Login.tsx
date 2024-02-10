/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';

import {ApplicationScreenProps} from '../../models';
import {loginSchema} from './loginSchema';
import useLogin from './useLogin';
import {styles} from './Login.style';

const Login = ({navigation}: ApplicationScreenProps) => {
  const {mutate, isPending} = useLogin(navigation);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Layout level="1" style={styles.container}>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={loginSchema}
            onSubmit={values => {
              mutate({
                email: values.email,
                password: values.password,
              });
            }}>
            {props => {
              const {handleChange, values, touched, errors, handleSubmit} =
                props;
              return (
                <View style={styles.form}>
                  <Input
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    label="Email"
                    caption={() => {
                      if (errors.email && touched.email) {
                        return <Text status="danger">{errors.email}</Text>;
                      } else {
                        return <></>;
                      }
                    }}
                    value={values.email}
                  />

                  <Input
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    label="Password"
                    secureTextEntry
                    caption={() => {
                      if (errors.password && touched.password) {
                        return <Text status="danger">{errors.password}</Text>;
                      } else {
                        return <></>;
                      }
                    }}
                    value={values.password}
                  />

                  <Button disabled={isPending} onPress={() => handleSubmit()}>
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

export default Login;
