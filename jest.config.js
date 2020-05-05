module.exports = {
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.test.ts?(x)',
    '!<rootDir>/src/index.ts',
    '!**/__snapshots__/**',
    '!**/_stories/**',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
