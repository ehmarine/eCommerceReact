import {useState} from 'react'
import Login from '../components/user/Login'
import Register from '../components/user/Register'


const LoginView = () => {

    const [toggle, setToggle] = useState(true)

    return (
       
       
        <div>
            <div className="mb-5">
              <button className="btn btn-warning" onClick={() => setToggle(!toggle)}>Go to {toggle ? 'Register' : 'Login'}</button>
            </div>
            
            {toggle ? <Login /> : <Register />}
            
            
  
        </div>
    )
}

export default LoginView
