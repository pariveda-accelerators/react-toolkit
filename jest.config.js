module.exports = {
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!**/__snapshots__/**',
    '!**/story-components.tsx',
    '!**/stories.tsx',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
