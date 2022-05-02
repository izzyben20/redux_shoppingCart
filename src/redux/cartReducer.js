import cartItems from "../cart-items"
import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from "./cartActionTypes"

const initialState = {
    cart: cartItems,
    total: 0,
    amount: 0
}

export const cartReducer = (state = initialState, action) => {
    // let tempCart;
    switch(action.type) {
        case DECREASE:
            let tempCart = state.cart.map(cartItem => {
                    if(cartItem.id === action.payload) {
                        cartItem = {...cartItem, amount: cartItem.amount - 1}
                    }
                    return cartItem
                })

            return {...state, cart: tempCart}
        case INCREASE:
            let tempCartd = state.cart.map(cartItem => {
                if(cartItem.id === action.payload){
                    return {...cartItem, amount: cartItem.amount + 1}
                }

                return cartItem
            })
            return {
                ...state, cart: tempCartd

            }
        case CLEAR_CART: 
            return {...state, cart: []}
        case REMOVE:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case GET_TOTALS:
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
                const {price, amount} = cartItem
                cartTotal.amount += amount

                const itemTotal = price * amount
                cartTotal.total += itemTotal
                return cartTotal
            }, {total: 0, amount: 0})
            total = +total.toFixed(2)
            return {...state, total, amount}
        default:
            return state
            
    }
    
    
}