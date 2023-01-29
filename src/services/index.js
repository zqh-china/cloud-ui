/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 16:11:15
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 17:06:13
 * @FilePath: \cloud\cloud-ui\src\services\index.js
 * @Description:
 *
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved.
 */
import { request } from '@umijs/max';
import domain from '../../config/domain';

export function fetchData(payload) {
  return request(`${domain.API}/files`, {
    method: 'GET',
  });
}
