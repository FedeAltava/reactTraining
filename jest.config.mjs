export const testEnvironment = 'jest-environment-jsdom';
export const transform = {
  '^.+\\.jsx?$': 'babel-jest',
};
export const setupFiles=[
  './jest.setup.js'
]
export const transformIgnorePatterns = [
  '/node_modules/(?!your-package-name-to-transform)/',
];
