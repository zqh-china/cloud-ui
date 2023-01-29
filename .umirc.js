/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 11:32:44
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 16:53:29
 * @FilePath: \cloud\cloud-ui\.umirc.js
 * @Description:
 *
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved.
 */
import { defineConfig } from '@umijs/max';
import config from './config';

export default defineConfig({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '视频',
      path: '/video',
      component: './Video',
    },
    {
      name: '图片',
      path: '/image',
      component: './Image',
    },
  ],
  npmClient: 'yarn',
  ...config,
});
