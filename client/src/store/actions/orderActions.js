import axios from 'axios'
import actiontypes from '../actiontypes'

export const createOrder = (order) => {
    return async dispatch => {
        const payload = {

            id: order.id,
            cart: order.cart  
        }
        console.log(order)
        await axios.post('http://localhost:9999/api/orders/new', payload)
        dispatch({type: actiontypes().order.createOrder})
 
    }
}

export const getOrders = (userId) => {
    return async dispatch => {
        const res = await axios.get(`http://localhost:9999/api/orders/${userId}`)
        console.log(res.data)
        dispatch(setOrders(res.data))
    }
}

export const setOrders = (orders) => {
    return {
        type: actiontypes().order.getOrders, 
        payload: orders
    }
}