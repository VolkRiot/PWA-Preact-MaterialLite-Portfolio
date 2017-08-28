import * as preact from 'preact-compat';

const react = {};

// Copy object properties to a new object which will allow react-hot-loader to function
Object.keys(preact).forEach((key) => {
  react[key] = preact[key];
});

module.exports = react;