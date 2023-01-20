const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  /**
   * Will be used to override some Webpack rules and more before compilation
   * @param {import('webpack').Configuration} config
   * @return config
   * */
  webpackFinal: (config) => {
    // ISSUE : Resolve Typescript aliases
    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    )

    // ISSUE : Getting error
    // Element type is invalid: expected a string (for built-in components)
    // or a class/function (for composite components) but got: undefined.

    // Getting the index of the rule containing svg as a static file
    const svgRuleIndex = config.module.rules.findIndex(({ test }) =>
      test.test('.svg')
    )

    // New test expression for the rule
    config.module.rules[svgRuleIndex].test =
      /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/

    // Now will take into account SVGs as Component as well as SVGs in <Image> components rendered in an img tag
    config.module.rules.unshift({
      test: /\.svg$/i,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
}
