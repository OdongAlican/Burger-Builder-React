import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../components/Logo/Logo'
import NavigationItems from '../NavigationItems'
import Menu from '../../../components/Menu/Menu'

const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <Menu clicked = {props.new}>
            Menu
        </Menu>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;