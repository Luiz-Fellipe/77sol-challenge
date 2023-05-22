module.exports = {
  testPathIgnorePatterns: ['/node_modules', '/dist', '/.turbo/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  testEnvironment: 'jsdom',
};
