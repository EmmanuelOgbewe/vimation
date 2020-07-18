import React,{Component} from 'react'
import {Button,Alert,InputNumber, Form, Select } from 'antd';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
};



class TransactionForm extends Component {

  constructor(props){
    super(props);
    this.state = ({
      showLoader : false,
      showAlert: false,
      alertMessage : "",
      alertTitle : "",
      alertType : ""
    })
  }

  onSubmit = (values) => {

    this.toggleLoader();
    const url = "http://localhost:4000/transactions";
    const Data = {
        from : values.from,
        to : values.to,
        amount : values.amount
    }
    const params = {
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(Data),
        
    }
    fetch(url,params)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.error){
          this.setState({
            showLoader : false,
            showAlert : true,
            alertMessage : data.error,
            alertType : "error"
          })
        } else {
          console.log("successful")
          this.setState({
            showLoader : false,
            showAlert : true,
            alertMessage : data.res,
            alertType : "success"
          })
        }
    })
  

  }
  toggleLoader = () => {
    this.setState({
      showLoader : !this.state.showLoader
    })
  }
  users = () => {
    return this.props.users.map(user => 
         <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
  }

  onClose = (e) => {
    console.log(e,"error card closed");
    this.setState({
      showAlert : false
    })
  }

  showAlert = () => {
    return <Alert
      message={this.state.alertTitle}
      description={this.state.alertMessage}
      type={this.state.alertType}
      closable
      onClose={this.onClose}
    />
  }

  render() {
      return (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember : false 
          }}
          onFinish={this.onSubmit}
          
          >
              <Form.Item
                label="From"
                name="from"
                rules={[
                    {
                        required: true,
                        message: 'Please select a user'
                    }
                ]}
              >
                <Select>
                    {this.users()}
                </Select>
                  
              </Form.Item>
              <Form.Item
                label="To"
                name="to"
                rules={[
                    {
                        required: true,
                        message: 'Please select a user'
                    }
                ]}
              >
                <Select>
                    {this.users()}
                </Select>
                  
              </Form.Item>
              <Form.Item
                name={['amount']}
                label="Amount"
                rules={[
                {
                    type: 'number',
                    min: 10,
                    max: 10000000,
                },
                ]}
                >
                <InputNumber />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button loading={this.state.showLoader} type="primary" htmlType="submit">
                    Transfer
                </Button>
            </Form.Item>
            {this.state.showAlert ? this.showAlert() : null}
        </Form>
      )
  }
}
export default TransactionForm 

