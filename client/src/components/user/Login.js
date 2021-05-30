import {useHistory} from 'react-router-dom'
import {useRef} from 'react'
import { loginUser } from '../../store/actions/userActions'
import { useDispatch } from 'react-redux'


const Login = () => {

 const email = useRef()
 const password = useRef()
 const history = useHistory()
 const dispatch = useDispatch()


 const handleSubmit = (e) => {
   e.preventDefault()
    let user = {
      email: email.current.value,
      password: password.current.value
    }
    dispatch(loginUser(user)) 
    history.push('/')
 }

    return (
        <div>
             <form onSubmit={handleSubmit}>
  

  
  <div className="form-outline mb-4">
    <input type="email" id="form3Example3" className="form-control" ref={email} />
    <label className="form-label" for="form3Example3">Email address</label>
  </div>

  
  <div className="form-outline mb-4">
    <input type="password" id="form3Example4" className="form-control" ref={password}/>
    <label className="form-label" for="form3Example4">Password</label>
  </div>
 
    
  <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>

  
  
</form>
        </div>
    )
}

export default Login
