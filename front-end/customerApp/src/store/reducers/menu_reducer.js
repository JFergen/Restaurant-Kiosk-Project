import { SET_MENU, SET_APPETIZERS, SET_BEVERAGES, SET_ENTREES, SET_DESSERTS } from '../actions/types'

const initialState = {
    entrees: [],
    beverages: [],
    desserts: [],
    appetizers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_MENU:
            return { 
                entrees: action.newEntrees,
                beverages: action.newBeverages,
                desserts: action.newDesserts,
                appetizers: action.newAppetizers
            }
        case SET_APPETIZERS:
            return {
                appetizers: action.newAppetizers,
                beverages: state.beverages,
                entrees: state.entrees,
                desserts: state.desserts
            }
        case SET_BEVERAGES:
            return {
                appetizers: state.appetizers,
                beverages: action.newBeverages,
                entrees: state.entrees,
                desserts: state.desserts
            }
        case SET_ENTREES:
            return {
                appetizers: state.appetizers,
                beverages: state.beverages,
                entrees: action.newEntrees,
                desserts: state.desserts
            }
        case SET_DESSERTS:
            return {
                appetizers: state.appetizers,
                beverages: state.beverages,
                entrees: state.entrees,
                desserts: action.newDesserts
            }
        default:
            return state;
    }
}