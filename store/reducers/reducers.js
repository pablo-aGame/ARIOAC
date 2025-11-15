import { useMemo } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'

import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    COLLAPSED_STATE,
    SIDEBAR_MODAL_STATE,
} from '../actions/action-types/action-names'
import { productsData } from '../data/products'

let store

const initialState = {
    products: productsData,
    addedItems: [],
    total: 0,
    shipping: 0,
    collapsedState: true,
    sidebarModalState: false,
}

const reducer = (state = initialState, action) => {
    // (tu reducer completo igual)
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if(existed_item){
            addedItem.quantity += 1 
            return { ...state, total: state.total + addedItem.price }
        } else {
            addedItem.quantity = 1
            let newTotal = state.total + addedItem.price 
            return { ...state, addedItems: [...state.addedItems, addedItem], total: newTotal }
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item){
            addedItem.quantity += action.qty
            return { ...state, total: state.total + addedItem.price * action.qty }
        } else {
            addedItem.quantity = action.qty
            let newTotal = state.total + addedItem.price * action.qty
            return { ...state, addedItems: [...state.addedItems, addedItem], total: newTotal }
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        return { ...state, addedItems: new_items, total: newTotal }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return { ...state, total: newTotal }
    }

    if(action.type === SUB_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return { ...state, addedItems: new_items, total: newTotal }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return { ...state, total: newTotal }
        }
    }

    if(action.type === ADD_SHIPPING){
        return { ...state, shipping: state.shipping + 6 }
    }

    if(action.type === 'SUB_SHIPPING'){
        return { ...state, shipping: state.shipping - 6 }
    }

    if(action.type === RESET_CART){
        return { ...state, addedItems: [], total: 0, shipping: 0 }
    }

    if(action.type === COLLAPSED_STATE){
        return { ...state, collapsedState: !state.collapsedState }
    }

    if(action.type === SIDEBAR_MODAL_STATE){
        return { ...state, sidebarModalState: !state.sidebarModalState }
    }

    return state
}

const initStore = (preloadedState = initialState) => {
    return createStore(
        reducer,
        preloadedState,
        compose(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = undefined
    }
    if (typeof window === 'undefined') return _store
    if (!store) store = _store
    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
