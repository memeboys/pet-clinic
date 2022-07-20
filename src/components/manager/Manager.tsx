import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';

const Manager:React.FC = () => (
  <Layout>
    <Sider>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            label: 'Категории',
          },
          {
            key: '2',
            label: 'Новости',
          },
          {
            key: '3',
            label: 'Лекарства',
          },
        ]}
      />
    </Sider>
  </Layout>
);
export default Manager;
