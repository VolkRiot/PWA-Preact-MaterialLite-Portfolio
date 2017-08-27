import { resolve } from 'path';
import webpack from 'webpack';

import { PORT } from './app/config';

export default {
  entry: ['./app/client/'],
  output: {
    filename: 'js/bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: isProd ? '/static/' : `http://localhost:${PORT}/dist/`,
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }],
  },
  devTool: isProd ? false: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccuranceOrderPlugin();
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
