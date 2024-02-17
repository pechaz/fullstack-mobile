import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    padding: 24,
  },
  form: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  testItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  testItemImage: {
    width: 48,
    height: 48,
    minWidth: 48,
    borderRadius: 50,
  },
  testItemTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  testItemTextHeader: {
    fontWeight: '700',
    fontSize: 14,
  },
  testItemTextDescription: {
    fontWeight: '400',
    fontSize: 12,
    color: '#ccc',
  },
});
