process.env.NODE_ENV = 'development';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const portfinder = require('portfinder');
const chalk = require('chalk');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const openBrowser = require('./openBrowser');
const utils = require('./utils');
const config = require('../config');
const devWebpackConfig = require('./webpack.dev.conf').devWebpackConfig;
const devServerConfig = require('./webpack.dev.conf').devServerConfig

portfinder.basePort = process.env.PORT || config.dev.port;
portfinder.getPort((err, port) => {
  if (err) {
    reject(err);
  } else {
    // publish the new Port, necessary for e2e tests
    process.env.PORT = port;
    // add port to devServer config
    devServerConfig.port = port;

    // Add FriendlyErrorsPlugin
    devWebpackConfig.plugins.push(
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [
            `Your application is running here: http://${
              devServerConfig.host
            }:${port}`,
          ],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined,
      }),
    );
    WebpackDevServer.addDevServerEntrypoints(devWebpackConfig, devServerConfig);
    const compiler = Webpack(devWebpackConfig);
    const devServer = new WebpackDevServer(compiler, devServerConfig);
    devServer.listen(port, devServerConfig.host, err => {
      if (err) {
        return console.log(err);
      }
      console.log(chalk.cyan('Compiling & Starting the development server...\n'));
      openBrowser(`${devServerConfig.host}:${port}`);
    });
  }
});