import React, { Component } from 'react'
import { Card, Table,Button, ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import { getArticles } from '../../requests'

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        render:()=>{
            return <Button> 操作 </Button>
        }
    },
];
export default class ArticleList extends Component {
    componentDidMount(){
        getArticles()
        .then(resp=>{
            console.log(resp);
            
        })
    }
    render() {
        return (
           <ConfigProvider locale={zhCN}>
    <Card title="文章列表" bordered={false} extra={<a href="#">导出Excel</a>}>
      <Table 
      dataSource={dataSource} 
      columns={columns} 
      />
    </Card>
    </ConfigProvider>
        )
    }
}
