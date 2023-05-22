module.exports = {
  testPathIgnorePatterns: [
    '/node_modules',
    '/dist',
    '/.turbo/',
    '/src/tests/',
    '/src/@types',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  testEnvironment: 'jsdom',

  //COVERAGE
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: [
    '/node_modules',
    '/dist',
    '/.turbo/',
    '/src/tests/',
    '/src/@types',
    'vite-env.d.ts',
  ],
};
