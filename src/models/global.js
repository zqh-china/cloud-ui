/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 11:32:44
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 11:35:52
 * @FilePath: \cloud\cloud-ui\src\models\global.js
 * @Description: 
 * 
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved. 
 */
// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState(DEFAULT_NAME);
  return {
    name,
    setName,
  };
};

export default useUser;
