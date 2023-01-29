/*
 * @Author: zhangqh zhangqihao@shangyangtai.com
 * @Date: 2023-01-29 14:12:18
 * @LastEditors: zhangqh zhangqihao@shangyangtai.com
 * @LastEditTime: 2023-01-29 14:13:06
 * @FilePath: \cloud\cloud-ui\src\pages\Image\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2023 by zhangqh zhangqihao@shangyangtai.com, All Rights Reserved. 
 */
import { PageContainer,
} from '@ant-design/pro-components';
import UploadBox from '../../components/UploadBox';

const ImageList = () => {

 return (
   <PageContainer
     header={{
       title: '图片',
     }}
   >
     <UploadBox></UploadBox>
   </PageContainer>
 )
}

export default ImageList;