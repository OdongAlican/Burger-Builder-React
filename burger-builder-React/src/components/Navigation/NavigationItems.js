import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../Navigation/NavigationItem/NavigationItem'

const navigationItems = () =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Check Out</NavigationItem>
    </ul>
)

export default navigationItems;