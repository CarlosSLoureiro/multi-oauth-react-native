module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset'
    ],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@main': './src/Main',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@remote': './src/remote',
            '@screens': './src/screens',
            '@utils': './src/utils'
          }
        }
      ],
      [
        'babel-plugin-transform-typescript-metadata'
      ],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
    ]
  };
};
