'use strict';

const path = require('path');

// 拼接目录路径
module.exports = {
  resolve(dir) {
    return path.join(__dirname, '..', dir);
  }
};
