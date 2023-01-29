/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 11:59:01
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 11:59:49
 * @FilePath: \cloud\cloud-ui\config\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved. 
 */
const userConfig = require('./userConfig.js');

module.exports = {
  ...userConfig,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [],
};
