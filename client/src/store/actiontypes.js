const actiontypes = () => {
  return {
    productCatalog: {
      set: 'SET_PRODUCT_CATALOG',
      setProduct: 'SET_PRODUCT'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT'
    },
    user: {
      register: 'REGISTER_USER',
      login: 'LOGIN_USER',
      set: 'SET_USER',
      check: 'CHECK_USER',
      logout: 'LOGOUT_USER'

    },
    order: {
      createOrder: 'CREATE_ORDER',
      getOrders: 'GET_ORDERS',
      getAdminOrders: 'ADMIN_GET',
    },
    
    admin: {
      toggleShipped: 'TOGGLE_SHIPPED',
      setAdminUsers: 'SET_ADMIN_USERS',
      setAdminUser: 'SET_ADMIN_USER',
      deleteUser: 'DELETE_USER',
      setAdminOrders: 'SET_ADMIN_ORDERS',
      getAdminUsers: 'GET_ADMIN_USERS'
      
    }

  }
}

export default actiontypes;