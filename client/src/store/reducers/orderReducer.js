import actiontypes from '../actiontypes'

const initState = {
    success: false,
    orders: null,
    adminOrders: null
}

const orderReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().order.getOrders:
            return {
                ...state,
                orders: action.payload
            }
        default: return state
    }
}

export default orderReducer