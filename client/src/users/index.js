import React, { Component } from 'react';
import UsersTable from './Table'
import { Form, Input, Button, Checkbox } from 'antd';


class UsersPage extends Component {

  constructor(props){
      super(props);

      this.state = {
          showLoader : true ,
          dataSource : []
      }

      // make fetch to transactions route 
  }

  componentDidMount(){
    const url = 'http://localhost:4000/users';
    setTimeout((
     
    ) => {
     
    },2000);

    fetch(url)
    .then(response => response.json())
    .then((data) => {
      this.setState(
          { dataSource : data.users.map(user => {
            return {
              key: user.id,
              name: user.name,
              id : user.id,
              accountNumber : user.accountNumber,
              not : user.numberOfTransactions,
              balance: user.balance == 0 ? "0.00" : user.balance,
              rating : user.meta.rating
            }
            }),
            showLoader : false
          }
        )
    })
  }
  
  render() {
      return (
        <div style={styles.pageWrapper}>
            <UsersTable loading={this.state.showLoader}  dataSource={this.state.dataSource}/>
        </div>
      )
  }

}
export default UsersPage;

const styles = {
    pageWrapper : {
        display: 'flex',
        flexDirection: 'column',
        padding : '0 2.2em',
    
        height : '100%',
        width : '100%',
        
    }
}
