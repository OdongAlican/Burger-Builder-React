import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'


const burger = (props) => {
   
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key = {igKey + i} type = {igKey}/>
            })
    }
        ).reduce((arr,el) => {
            return arr.concat(el)
        },[])
    if (transformedIngredients.length === 0){
        transformedIngredients = <p className={classes.Centre}>Please start Adding ingredients !</p>
    }
        return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;