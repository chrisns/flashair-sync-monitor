"use strict";

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');
const watchr = require('watchr')
const gm = require('gm').subClass({imageMagick: true});
const path = require('path');
const parseurl = require('parseurl');

const file_path = process.env.WATCHDIR;

server.listen(process.env.PORT);

app.use((req, res, next) => {
  var params = req.query;
  var width = params.w;
  var height = params.h;

  if (!(width || height)) {
    return next();
  }

  var pathname = path.join(file_path, parseurl(req).pathname);
  var flag = '' + (params.f ? '!' : '');

  res.set('content-type', 'image/png')

  gm(pathname)
    .resize(width, height, flag)
    .noProfile()
    .autoOrient()
    .stream('png')
    .pipe(res);
});

app.use(express.static(file_path));

app.get('/', (req, res) => {
  get_initial_list(response => res.json(response));
});

const get_initial_list = (response) => {
  fs.readdir(file_path, (err, items) => response(items));
}

io.on('connection', (socket) => {
  console.log(socket);
  get_initial_list((response) => socket.emit('news', response))
});

const notifiy_file_change = (changeType, filePath) => {
  let event = {
    change_type: changeType,
    path: filePath.replace(file_path, '')
  };
  io.emit(event);
  console.log(event);
};

watchr.watch({
  paths: [file_path],
  listeners: {
    change: notifiy_file_change
  }
});