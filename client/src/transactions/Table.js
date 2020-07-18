import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
]

class TransactionTable extends Component {  
    render () {
        return (
            <Table size='default' dataSource={this.props.dataSource} columns={columns} />
        )
    }
}
export default TransactionTable