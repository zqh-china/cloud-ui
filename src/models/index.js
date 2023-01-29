/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 16:08:31
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 17:03:52
 * @FilePath: \cloud\cloud-ui\src\models\index.js
 * @Description:
 *
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved.
 */

import * as API from '@/services/index';

const IndexModel = {
  namespace: 'index',
  state: {
    name: 'index',
    data: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload,
      });
    },

    *fetchData({ payload }, { call, put }) {
      const response = yield call(API.fetchData, payload);
      console.log('response', response);

      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    getData(state, { payload }) {
      return { ...state, data: { ...payload } };
    },
  },
};

export default IndexModel;
