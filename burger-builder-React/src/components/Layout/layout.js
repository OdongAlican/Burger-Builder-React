import React, { Component } from 'react';
import Aux from '../../HOC/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'



class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render(){
        return(   
        <Aux>
            <Toolbar new={this.sideDrawerToggleHandler}/>
            <SideDrawer 
            open = {this.state.showSideDrawer}
            closed ={this.sideDrawerHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>)
    }
 
}

export default Layout;