jest.mock(`@react-native-async-storage/async-storage`, () =>
  require(`@react-native-async-storage/async-storage/jest/async-storage-mock`)
);

jest.mock(`query-string`, () => ({
  parse: jest.fn(),
  stringify: jest.fn()
}));