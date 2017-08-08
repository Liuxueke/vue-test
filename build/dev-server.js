const express = require('express');
const webpack = require('webpack');
const path = require("path");
const fs = require('fs');
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

//mock模拟接口数据
const mockDir = path.resolve(__dirname, '../mock');
fs.readdirSync(mockDir).forEach(function(file){
  var mock = require(path.resolve(mockDir, file));
  app.use(mock.api, mock.response);
});

//代理请求
const proxy = require('http-proxy-middleware');
const apiProxy = proxy('/',{
  target: {
    host: '10.10.20.240',
    protocol: 'http',
    port: 5570
  },
  logLevel: 'debug'
});
app.use(apiProxy);

app.listen(7777,function(){
  console.log('server is running!')
});