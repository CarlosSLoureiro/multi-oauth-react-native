module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFiles: ["./jest.setup.js"]
};