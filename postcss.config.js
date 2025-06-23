const path = require('path');

module.exports = {
  plugins: {
    // 1. Handles @import statements FIRST
    'postcss-import': {
      // Add node_modules to the search paths
      path: [path.resolve(__dirname, 'src/styles'), path.resolve(__dirname, 'node_modules')],
    },
    tailwindcss: {
      config: path.resolve(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
