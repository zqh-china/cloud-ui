/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 11:32:44
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 11:42:04
 * @FilePath: \cloud\cloud-ui\src\app.js
 * @Description: 
 * 
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved. 
 */
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
