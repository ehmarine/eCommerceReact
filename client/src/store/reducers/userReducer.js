import actiontypes from '../actiontypes'

const initState = {
    loggedIn: false,
    userID: null,
    token: null
}

const userReducer = (state = initState, action) => {

    switch(action.type) {

        case actiontypes().user.set:
            return {
                ...state, 
                loggedIn: true,
                userId: action.payload.id,
                token: action.payload.token
            }
        case actiontypes().user.check:
            if(action.payload) {
                return {
                    ...state,
                    loggedIn: true
                }
            
            }
            else {
                return {
                    ...state,
                    loggedIn: false
                }
            }
        case actiontypes().user.logout:
            return {
                ...state,
                loggedIn: action.payload,
                userId: null,
                token: null
            }    

        default: 
         return state 
    }
}


export default userReducer 