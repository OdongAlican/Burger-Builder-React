import React from 'react';
import classes from './Button.css'

const button = (props)=>(
    <div 
    className={[classes.Button,classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</div>
)

export default button;