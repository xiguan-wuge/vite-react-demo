import React from "react";
import { Layout } from 'antd';
import style from './home/module.less';
const HomePage:React.FC = ({children}) => {
  return(
    <Layout style={{minHeight: '100vh', width: '100%'}}>
      this is HomePage
    </Layout>
  )
}

export default HomePage