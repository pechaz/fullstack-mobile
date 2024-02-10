import {MMKVLoader} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().withEncryption().initialize();

export const setStorage = (key: string, value: string) => {
  storage.setString(key, value);
};

export const getStorage = (key: string) => {
  return storage.getString(key);
};

export const removeStorage = (key: string) => {
  return storage.removeItem(key);
};
