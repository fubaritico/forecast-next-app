const nextJest = require('next/jest')
const path = require('path')
const getJestMappersFromTSConfig = require('tsconfig-paths-jest-mapper')
const moduleNameMapper = getJestMappersFromTSConfig(path.resolve(__dirname, './tsconfig.paths.json'))

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.afterEnv.js'],
  // Stub native javascript features
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/*.test.ts?(x)'],
  testTimeout: 80_000,
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    //'\\.svg$': '<rootDir>/test/svgr.mock.tsx',
    //'\\.(css|scss)$': 'identity-obj-proxy',
    ...moduleNameMapper,
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
