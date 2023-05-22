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
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: [
    '/node_modules',
    '/dist',
    '/.turbo/',
    '/src/tests/',
    '/src/@types',
    '/src/styles/',
    '/src/App.tsx',
    '/src/main.tsx',
    '/src/services/',
    'vite-env.d.ts',
  ],
};
