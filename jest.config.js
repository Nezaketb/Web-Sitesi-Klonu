module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest',
  }
}
