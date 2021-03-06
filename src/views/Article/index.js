import React, { Component } from 'react'
import { Card, Table,Button, ConfigProvider,Tag } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import { getArticles } from '../../requests'

const titleDisplayMap={
    id:'id',
    title:'标题',
    author:'作者',
    createAt:'创建时间',
    amount:'阅读量'
}

export default class ArticleList extends Component {
    constructor() {
        super()
        this.state={
            dataSource : [{
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
            ],
            columns : [{
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
                    render: (text,record,index) => {
                        console.log(text,record,index);
                        
                        return <Button>操作</Button>
                    }
                },
            ],
            total: 0
        }
    }

    createColumns = (columnKeys) => {
        return columnKeys.map(item => {
          if (item ==='amount') {
              return {
                title: titleDisplayMap[item],
                    dataIndex: item,
                    key: item,
                    render: (text, record) => {
                        const { amount }=record
                        return amount > 200 ? <Tag color = "red"> { record.amount } </Tag>:<Tag color = "green"> {record.amount} </Tag>
                    }
              }
          }
          return {
              title: titleDisplayMap[item],
              dataIndex: item,
              key: item,
          }
        })
    }
    getData=()=>{
        getArticles()
            .then(resp => {
                const columnKeys=Object.keys(resp.data.list[0])
                const columns=this.createColumns(columnKeys)
                this.setState({
                    total: resp.data.total,
                    dataSource:resp.data.list,
                    columns
                })
            })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
           <ConfigProvider locale={zhCN}>
    <Card title="文章列表" bordered={false} extra={<a href="#">导出Excel</a>}>
      <Table 
      dataSource={this.state.dataSource} 
      columns={this.state.columns}
      pagination={{
          total:this.state.total,
          hideOnSinglePage:true
      }} 
      />
    </Card>
    </ConfigProvider>
        )
    }
}
