import React from 'react'

const OrderList = ({order}) => {



    return (
        <div className="d-flex border m-3 p-2 hover-shadow">
            <p>OrderID: {order._id}</p>
            
            
        {
            order && order.products.map(product => (
                <div className="p-2 d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                <img src={product.image} alt="product" className="img-fluid image-width"/>
                <div>
                    <div><strong>{ product.name }</strong></div>
                    <div><small>{ product.quantity } x { product.price }</small></div>
                </div>
                </div>

                
        </div>

            ))
        }
        <div>
       Order status: {order.shipped?'Shipped':'Pending'}
        </div>
        </div>
    )
}

export default OrderList
