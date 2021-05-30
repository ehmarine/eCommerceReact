import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAdminOrders, toggleShipped} from '../store/actions/adminActions'
import AdminUsers from '../components/admin/AdminUsers'



const Admin = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAdminOrders())
        
    },[dispatch])

    let adminOrders = useSelector(state => state.admin.adminOrders)
    const [toggle, setToggle] = useState(false)

    return (
        
        <div>

            <button onClick={() => setToggle(!toggle)}> Administer {toggle ? 'Orders' : 'Users'}</button>
            {
                toggle 
                ?
                <AdminUsers />
                :
                               
                
                adminOrders && adminOrders.map(order => (
                    
                    <div className="d-flex border m-3 p-2 hover-shadow">
                    <div>
                    <p>OrderID: {order._id}</p> 
                    <p>UserID: {order.userId}</p>
                    </div>
                    
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
                <button onClick={()=>dispatch(toggleShipped(order._id, !order.shipped))} className="toggleShipped btn btn-warning">Ship</button>
                <div className="border">status: {order.shipped ? 'Shipped' : 'Pending'}</div>
        
                </div>



                ))
            }


        </div>
    )
}

export default Admin
