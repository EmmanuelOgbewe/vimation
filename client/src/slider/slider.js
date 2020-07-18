import React, {Component} from 'react'
import { Menu } from 'antd';

const { SubMenu } = Menu;

class Slider extends Component {

    render (){
        return (
            <Menu style={styles.slider}>
                <Menu.Item  onClick={(event) => this.props.changePage(event)}>Transactions</Menu.Item>
                <Menu.Item onClick={(event) => this.props.changePage(event)}>Users</Menu.Item>
                <Menu.Item onClick={(event) => this.props.changePage(event)}>About</Menu.Item>
            </Menu>
        )
    }
}
export default Slider 

const styles = {
    slider : {
        width: '10.2em'
    }
}