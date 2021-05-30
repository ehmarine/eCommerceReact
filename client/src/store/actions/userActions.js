import axios from 'axios'
import actiontypes from '../actiontypes'



export const registerUser = (user) => {
    return async dispatch => {
       await axios.post('http://localhost:9999/api/users/register', user)
        dispatch(loginUser(user))
    }
        
}

export const loginUser = (user) => {
    return async dispatch => {
        const res = await axios.post('http://localhost:9999/api/users/login', user)
        console.log(res.data)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('userId', res.data.id)
        if(res.data.isAdmin) {
            sessionStorage.setItem('isAdmin', res.data.isAdmin)
        }
        dispatch(setUser(res.data))
    }
}

export const logoutUser = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('isAdmin')
    return {
        type: actiontypes().user.logout,
        payload: false
    }
}

export const setUser = (user) => {
    return {
        type: actiontypes().user.set, 
        payload: user
    }
}

export const checkUser = () => {
    let token = sessionStorage.getItem('token')
    return {
        type: actiontypes().user.check, 
        payload: token
    }
}