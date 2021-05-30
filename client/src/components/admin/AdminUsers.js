import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAdminUsers, deleteUser} from '../../store/actions/adminActions'



const AdminUsers = () => {

    const dispatch = useDispatch()
    const users = useSelector(state=>state.admin.adminUsers)
    const isAdmin = sessionStorage.getItem('isAdmin')

    useEffect(() => {
        dispatch(getAdminUsers())

    }, [dispatch])

    return (
        <div>
            
            <div className="container d-flex">
                {users && users.map(user=>(
                    <div className="d-flex card p-4 m-3 hover-shadow">
                       <p> {user.firstName} {user.lastName}</p>
                        {user.email}
                        {
                            user.isAdmin ? <p></p>
                            :
                            <button onClick={()=>dispatch(deleteUser(user._id))} className="btn btn-danger">X</button>
                        }
                    </div>
                ))}
            </div>


        </div>
    )
}

export default AdminUsers
