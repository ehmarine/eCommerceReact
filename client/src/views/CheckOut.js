import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../store/actions/orderActions'
import CartProduct from '../components/shoppingCart/CartProduct';
import { Link } from 'react-router-dom'



const CheckOut = () => {

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity)
  const dispatch = useDispatch()
  const id = sessionStorage.getItem('userId')

  let order = {
    id: id,
    cart: shoppingCart 
  }


    return (
        <div>
            
            <div>
      {
        shoppingCart && shoppingCart.map(product => (
          <CartProduct key={product._id} product={product} />
        ))
      }
      {/* {
        shoppingCart.length < 1 && empty
      } */}

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total Price: <span>{totalCartAmount}</span>
          </div>
          <div>
            Items <span>{totalCartQuantity} amount</span>
          </div>
        </div>
        <Link to='/dashboard'>
        <button onClick={()=>dispatch(createOrder(order))} className="btn btn-info">Checkout</button>
        </Link>
      </div>
      
    </div>

        </div>
    )
}

export default CheckOut
