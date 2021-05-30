import axios from 'axios'
import actiontypes from '../actiontypes'

export const getAdminOrders = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/orders')
        dispatch(adminSetOrders(res.data))
    }
}

export const adminSetOrders = (orders) => {
    return {
        type: actiontypes().admin.setAdminOrders,
        payload: orders
    }
} 

export const toggleShipped = (id, boolean) => {
    return async dispatch  => {
        let payload = {
            shipped: boolean
        }
        await axios.put(`http://localhost:9999/api/orders/${id}`, payload)
         dispatch(getAdminOrders())
    }
}

export const getAdminUsers = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/users')
        dispatch(setAdminUsers(res.data))
    }
} 

export const setAdminUsers = (users) => {
    return {
        type: actiontypes().admin.setAdminUsers, 
        payload: users
    }
}

export const deleteUser = (id) => {
    return async dispatch => {
        await axios.delete(`http://localhost:9999/api/users/${id}`)
        dispatch(getAdminUsers())
    }
}