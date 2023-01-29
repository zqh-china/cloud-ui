/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 14:12:18
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 17:15:20
 * @FilePath: \cloud\cloud-ui\src\pages\Image\index.jsx
 * @Description:
 *
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved.
 */
import { PageContainer } from '@ant-design/pro-components';
import UploadBox from '../../components/UploadBox';
import { connect } from 'umi';
import { Image, Card } from 'antd';

const ImageList = (props) => {
  return (
    <PageContainer
      header={{
        title: '图片',
      }}
    >
      {props.data.map((item) => {
        return (
          <div key={item.id} style={{ padding: 20, display: 'inline-block' }}>
            <Card>
              <Image width={200} src={item.path} />
            </Card>
          </div>
        );
      })}
      <UploadBox />
    </PageContainer>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.index;
  return {
    data,
  };
};
export default connect(mapStateToProps)(ImageList);
