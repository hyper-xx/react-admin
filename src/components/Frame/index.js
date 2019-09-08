import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

import logo from './logo.png'
import './frame.less'

const { Header,Content, Sider } = Layout
var breadcrumbItems = ''

@withRouter
class Frame extends Component {
    onMenuClick = ({ item,key }) => {
        this.props.history.push(key)
        breadcrumbItems = (item.props.children[1]);
        
    }
    
    render() {
        return (
            <Layout style={{minHeight:'100%'}}>
                <Header className="header hyper-header">
                    <div className="hyper-logo">
                      <img src={logo} alt="hyperxu" />
                    </div>
                    
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[this.props.location.pathname]}
                            onClick={this.onMenuClick}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                                this.props.menus.map(item => {
                                    return (
                                    <Menu.Item key={item.pathname}>
                                        <Icon type={item.icon} />
                                    {item.title}
                                    </Menu.Item>
                                )
                            })
                            }
                            
                        
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 16px 24px' }}>
                        <Breadcrumb style={{ margin: '8px 0' }}>
                        <Breadcrumb.Item className="ant-breadcrumb">{breadcrumbItems}</Breadcrumb.Item>
                                 
                            
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                
                                margin: 0,
                                
                            }}
                        >
                            {this.props.children}
        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Frame