/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 11:32:44
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 17:01:44
 * @FilePath: \cloud\cloud-ui\src\pages\Home\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved.
 */
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { connect } from 'umi';
// import { useModel } from '@umijs/max';
import styles from './index.less';
import { useEffect } from 'react';

const HomePage = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    getFiles();
  }, []);

  function getFiles() {
    dispatch({
      type: 'index/fetchData',
      payload: {},
    });
  }

  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={'@umi/max'} />
      </div>
    </PageContainer>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.index;
  return {
    data,
  };
};
export default connect(mapStateToProps)(HomePage);

// export default HomePage;
