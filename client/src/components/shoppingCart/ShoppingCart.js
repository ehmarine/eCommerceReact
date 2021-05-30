import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  let isLoggedIn = useSelector(state => state.user.loggedIn)

  const empty = (
    <div className="p-2 d-flex align-items-center">
      Your cart is empty
    </div>
  )

  return (
    <div>
      {
        shoppingCart && shoppingCart.map(product => (
          <CartProduct key={product._id} product={product} />
        ))
      }
      {
        shoppingCart.length < 1 && empty
      }

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total Price: <span>{totalCartAmount}</span>
          </div>
          <div>
            Items <span>{totalCartQuantity} st</span>
          </div>
          {
            isLoggedIn
            ?
            <div> 
              <Link to="/checkout" className="btn btn-info">To Checkout</Link>
            </div> 
            :
            <Link to="/checkout" className="d-none">To Checkout</Link>
          }
        </div>
      </div>
      
    </div>
  )
}

export default ShoppingCart
