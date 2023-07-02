jest.mock(`@react-native-async-storage/async-storage`, () =>
  require(`@react-native-async-storage/async-storage/jest/async-storage-mock`)
);

jest.mock(`query-string`, () => ({
  parse: jest.fn(() => `parsed-string`),
  stringify: jest.fn(() => `stringied-string`)
}));