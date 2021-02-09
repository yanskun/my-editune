module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
        backgrounds: false,
        controls: true,
        docs: false,
        viewport: false,
        toolbars: false,
      },
    },
    '@storybook/addon-knobs',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    })

    config.module.rules.push({
      test: /\.pug$/,
      use: [{ loader: 'pug-plain-loader' }],
    })

    // Return the altered config
    return config
  },
}
