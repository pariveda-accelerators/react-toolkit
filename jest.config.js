module.exports = {
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!**/__snapshots__/**',
    '!**/_stories/**',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
