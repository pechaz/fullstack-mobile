import type {StackScreenProps} from '@react-navigation/stack';

export type ApplicationStackParamList = {
  Splash: undefined;
  Login: undefined;
  Tasks: undefined;
  Task: undefined;
  TaskDetail: {id: string};
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
