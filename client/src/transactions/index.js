import React, { Component } from 'react';
import TransactionsTable from './Table'
import { Button,  Modal } from 'antd';
import TransactionForm from './Form'

class TransactionPage extends Component {

  constructor(props){
      super(props);

      this.state = {
          showLoader : true ,
          visible : false,
          users : [],
          transactions : []
      }
      
  }

  componentDidMount() {
    var usersUrl = "http://localhost:4000/users";
    var transactionsUrl = "http://localhost:4000/transactions"

    //fetch users
    fetch(usersUrl)
    .then(response => response.json())
    .then(data => {
      this.setState(
          { users : data.users }
        )
    })
    fetch(transactionsUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        transactions : data.transactions.map(tr => {
          return {
            description : `${tr.from} ---> ${tr.to}`,
            amount : tr.amount,
            timestamp: tr.timestamp
          }
        })
      })
    })
  }

  showModal = () => {
    this.setState(
      { visible : true }
    )
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
  
  render() {
      return (
        <div style={styles.pageWrapper}>
            <div>
                <Button type="default" onClick={this.showModal}>New Transaction</Button>
            </div><br/>
            <TransactionsTable dataSource={this.state.transactions}/>
            <Modal
              title = "New Transaction"
              visible = {this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[]}
            >

              <TransactionForm users={this.state.users} onClear={this.handleCancel}/>
              
            </Modal>
        </div>
      )
  }

}
export default TransactionPage;

const styles = {
    pageWrapper : {
        display: 'flex',
        flexDirection: 'column',
        padding : '0 2.2em',
    
        height : '100%',
        width : '100%',
        
    }
}
