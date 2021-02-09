module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        controls: true,
        docs: false,
        viewport: false,
        toolbars: false,
      },
    },
  ],
}
