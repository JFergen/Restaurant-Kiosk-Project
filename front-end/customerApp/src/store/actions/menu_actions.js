import { SET_MENU, SET_APPETIZERS, SET_BEVERAGES, SET_DESSERTS, SET_ENTREES } from './types';

export const setMenu = (entrees, beverages, desserts, appetizers) => dispatch => {
    dispatch({
        type: SET_MENU,
        newEntrees: entrees,
        newBeverages: beverages,
        newDesserts: desserts,
        newAppetizers: appetizers
    });
};

export const setAppetizers = (newAppetizers) => dispatch => {
    dispatch({
        type: SET_APPETIZERS,
        newAppetizers: newAppetizers
    })
}

export const setBeverages = (newBeverages) => dispatch => {
    dispatch({
        type: SET_BEVERAGES,
        newBeverages: newBeverages
    })
}

export const setDesserts = (newDesserts) => dispatch => {
    dispatch({
        type: SET_DESSERTS,
        newDesserts: newDesserts
    })
}

export const setEntrees = (newEntrees) => dispatch => {
    dispatch({
        type: SET_ENTREES,
        newEntrees: newEntrees
    })
}