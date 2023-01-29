/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 11:49:43
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 13:34:40
 * @FilePath: \cloud\cloud-ui\src\pages\Video\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved. 
 */
import { PageContainer,
 } from '@ant-design/pro-components';
import UploadBox from '../../components/UploadBox';

const VideoList = () => {

  return (
    <PageContainer
      header={{
        title: '视频',
      }}
    >
      <UploadBox></UploadBox>
    </PageContainer>
  )
}

export default VideoList;