import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from "./cartActionTypes";

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const removeCartItem = (id) => {
    return {
        type: REMOVE,
        payload: id
    }
}

export const increaseQty = (id) => {
    return {
        type: INCREASE,
        payload: id
    }
}

export const decreaseQty = (id) => {
    return {
        type: DECREASE,
        payload: id
    }
}

export const getTotals = () => {
    return {
        type: GET_TOTALS
    }
}