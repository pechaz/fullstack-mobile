module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'inline-dotenv',
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
