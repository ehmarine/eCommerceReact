import React from 'react'
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  return (
    
    
    <div className="col hover-shadow">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
          <p>{ product.short }</p>
          <p className="text-danger h5">{ product.price }</p>
        </div>
        </div>
          <Link to={`details/${product._id}`} className="btn m-1"> Details</Link>
          <button className="btn m-1 btn-info" onClick={() => {
            dispatch(addToCart(product))
          }}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
