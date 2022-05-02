import { createStore } from 'redux'
import { cartReducer } from './cartReducer'

export const store = createStore(cartReducer)


const countOccurrence = arr => {
    return arr.reduce((accumulator, currentElement) => {
        accumulator[currentElement] = ++accumulator[currentElement] || 1
        return accumulator
    }, {})
}