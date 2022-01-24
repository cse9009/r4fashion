import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const { Header, Content, Footer } = Layout;

const SiteLayout = (props) => {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 2, width: '100%'}}>
                <SiteHeader/>
            {/* <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
            </Header>
            <Content className="site-layout" style={{ padding: '0', marginTop: 74 }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div className="site-layout-background" style={{ minHeight: '100vh' }}>
                    {props.children}
                </div>
            </Content>
            <SiteFooter/>
        </Layout>
    );
};

export default SiteLayout;