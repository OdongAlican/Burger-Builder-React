import React from 'react';
import NavigationItems from '../NavigationItems'
import Logo from '../../Logo/Logo'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../HOC/Aux'

const sideDrawer = (props)=>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer, classes.Open]
    }
    return(
        <Aux>
        <Backdrop show = {props.open} closed={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <NavigationItems/>
        </div>
        </Aux>
    )
}

export default sideDrawer;