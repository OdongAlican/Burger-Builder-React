import React from 'react';
import Aux from '../../HOC/Aux';
import Button from '../UI/Button/Button';

const oderySummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKeys=>{
        return (
                <li key={igKeys}>
                    <span style={{textTransform:'capitalize'}}>{igKeys}</span>: {props.ingredients[igKeys]}
                </li>)
    })
    return(
     <Aux>
         <h3>Your Order</h3>
         <p>A delicious Burger with the following ingredients:</p>
         <ul>
             {ingredientSummary}
         </ul>
         <h4>Continue to check out</h4>
         <p><strong>The total Price is : {props.price.toFixed(2)}</strong></p>
         <Button btnType="Success" clicked={props.continued}>CONTINUE</Button>
         <Button btnType="Danger" clicked={props.cancelled}>CANCEL</Button>
        </Aux>
    )
}

export default oderySummary;