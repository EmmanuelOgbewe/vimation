import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Account #',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
    },
    {
      title: 'Number of Transactions',
      dataIndex: 'not',
      key: 'not',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },

    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },

  ];

class UsersTable extends Component {  
    render () {
        return (
            <Table loading={this.props.loading} size='default' dataSource={this.props.dataSource} columns={columns} />
        )
    }
}
export default UsersTable