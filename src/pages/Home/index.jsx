/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 11:32:44
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 11:38:26
 * @FilePath: \cloud\cloud-ui\src\pages\Home\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved. 
 */
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
