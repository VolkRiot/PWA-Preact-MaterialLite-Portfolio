import { resolve } from 'path';
import webpack from 'webpack';

import { PORT, isProd } from './app/config';

export default {
  entry: [
      'react-hot-loader/patch',
    './app/client/App.jsx'
  ],
  output: {
    filename: 'js/bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: isProd ? '/static/' : `http://localhost:${PORT}/dist/`
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "react": resolve(__dirname, "ReactToPreact.config.js"),
      "react-dom": "preact-compat"
    }
  },
  devServer: {
    port: PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
