import React, {Component} from 'react';
import {Button} from 'antd';
import Slider from '../slider/slider'
import TransactionsPage from '../transactions/index'
import UsersPage from '../users/index'
import About from '../about/about'
import { v4 as uuidv4 } from 'uuid';

import './MainPage.css'
import 'antd/dist/antd.css';

function Page({title, color}) {
  return (
    <div style={{height : "100%", width : "100%", backgroundColor: color}}>
      <label>{title}</label>
    </div>
  )
}

class Dashboard extends Component {

    constructor (props){
        super(props);
        this.state = {
            pageIndex : 0,

        }
        this.pages = [
          <TransactionsPage></TransactionsPage>,
          <UsersPage></UsersPage>,
          <About></About>
         
        ]
        this.changePage = this.changePage.bind(this);
    }
    changePage(event){
      var goToIndex = 0;
      switch(event.key){
        case "item_0":
          console.log("Transactions")
          goToIndex = 0;
          break;
        case "item_1":
          console.log("Users")
          goToIndex = 1;
          break;
        default:
          goToIndex = 2;
          console.log("about")   
      }
      this.setState({
        pageIndex : goToIndex
      })
    }

    render(){
        return (
            <div style={style.wrapper}>
                <header style={style.headerStyle}>
                    <section id="logo">
                        <svg height="50" width="50">
                            <circle cx="25" cy="25" r="17.5" stroke-width="3" fill="#6F53E6" />
                        </svg>
                        <label style={style.appTitle}>VIMATION</label>
                    </section>
                   
                </header>
              
                <section style={style.dashboardStyle} id="framesView">
                    <Slider changePage={this.changePage}></Slider>
                    <div style={style.pagesStyle} id="pagesWrapper">
                      {this.pages[this.state.pageIndex]}
                    </div>
                </section>
             </div>
        )
    }
}

export default Dashboard

const style = {
    wrapper : {
      backgroundColor : 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'hidden'
    },
    appTitle : {
      fontSize : '1.9em',
      color : '#8766F5',
      fontWeight : 'bold',
      
    },
    headerStyle : {
      display: 'flex',
      width : "100%",
      padding : '1.4em',
      flexDirection: 'row',
      alignItems : 'space-between'
    },

    pagesStyle : {
      width : "100%",
      height: "100%",
      
    },

    dashboardStyle : {
        height : '100%',
        width : '100%',
        display: 'flex',
        flexDirection: 'Row',
    },
    
  }