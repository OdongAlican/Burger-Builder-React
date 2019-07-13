import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
    {label: 'Salads', type :'salad'},
    {label: 'Meat', type :'meat'},
    {label: 'Cheese', type :'cheese'},
    {label: 'Bacon', type :'bacon'}
]

const buildControls = (props)=>{
    return(
        <div className={classes.BuildControls}>
            <p>Current Price :<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl=>(
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.ingredientsAdded(ctrl.type)}
                removed={()=>props.ingredientsremoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}/>
            ))}
            <button className={classes.OrderButton} disabled ={!props.puchasable} onClick={props.ordered}>Order Now</button>
        </div>
    )
}

export default buildControls;