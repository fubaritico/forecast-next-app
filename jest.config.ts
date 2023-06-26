import type { Config } from 'jest'
import path from 'path'
import nextJest from 'next/Jest'
import getJestMappersFromTSConfig from 'tsconfig-paths-jest-mapper'

const moduleNameMapper = getJestMappersFromTSConfig(
  path.resolve(__dirname, './tsconfig.paths.json')
)

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.afterEnv.ts'], // Add more setup options before each test is run
  setupFiles: ['<rootDir>/jest.setup.ts'], // Stub native javascript features
  testRegex: ['(/src/.*(test|spec))\\.[jt]sx?$'],
  // testMatch: ['**/*.test.ts?(x)'],
  testTimeout: 80_000,
  moduleNameMapper: {
    ...moduleNameMapper,
  },
}

// taken from https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525
const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()

  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Workaround to put our SVG stub first
      '\\.svg': '<rootDir>/src/test/svgr.mock.tsx',
      // New bug in next/Jest since Next.js v13.2.x
      // You have to specify the complete path to preview.tsx for it ot be taken into account as a module
      '\\.storybook/preview': '<rootDir>/.storybook/preview.tsx',
      ...nextJestConfig.moduleNameMapper,
    },
  }
}

export default jestConfig
