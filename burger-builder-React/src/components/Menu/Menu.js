import React from 'react'
import Aux from '../../HOC/Aux'
import classes from './Menu.css'


const menu = (props) =>(
    <Aux>
     <button className={classes.Button} onClick={props.clicked}>{props.children}</button>
    </Aux>
)

export default menu;