import React, {Component} from 'react';
import Aux from '../HOC/Aux';
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/OrderySummary/OrderySummary'


const INGREDIENTS_PRICES = {
        salad:0.5,
        cheese:0.4,
        bacon:1.3,
        meat:0.7
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0
        },
        totalPrice:4,
        puchasable : false,
        purchasing: false
    }

    upDatePurchaseState(ingredients){
        // const ingredients = {
        //     ...this.state.ingredients
        // }

const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum,el)=>{
            return sum + el
        },0)

        this.setState({puchasable: sum > 0});
    }
    addIngredientHandler=(type) => {
        const oldCount= this.state.ingredients[type];
        const updated = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients}

        updatedIngredients[type] = updated;
        const priceAddition = INGREDIENTS_PRICES [type];
         const oldPrice = this.state.totalPrice;
         const newPrice = priceAddition + oldPrice;
         this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
         this.upDatePurchaseState(updatedIngredients);
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }

    removeIngredientHandler=(type) =>{ 
        const oldCount= this.state.ingredients[type];
        if(oldCount <= 0){
            return 
        }
        const updated = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients}

        updatedIngredients[type] = updated;

         const priceDeduction = INGREDIENTS_PRICES [type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice - priceDeduction;
         this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
         this.upDatePurchaseState(updatedIngredients);
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandler=()=>{
        alert('you can continue')
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
          
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;  
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>      
                <Modal show={this.state.purchasing}
                        close={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    cancelled={this.purchaseCancelHandler}
                    continued={this.purchaseContinueHandler}/>
                </Modal>
                <BuildControls 
                ingredientsAdded = {this.addIngredientHandler}
                ingredientsremoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                price={this.state.totalPrice}
                puchasable = {this.state.puchasable}
                ordered={this.purchaseHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;