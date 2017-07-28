const express = require('express');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const compiler = webpack(baseConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const history = require('connect-history-api-fallback');
const app = express();

app.use(history());

app.use(webpackDevMiddleware(compiler,{
  noInfo: true,
  publicPath: baseConfig.output.publicPath,
  quiet: true
}));
app.use(webpackHotMiddleware(compiler,{
  log: false
}));

app.listen(7777,function(){
  console.log('server is running!')
});