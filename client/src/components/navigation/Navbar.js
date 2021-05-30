import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { useSelector} from 'react-redux'
import { logoutUser } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux'


const Navbar = () => {

  const dispatch = useDispatch()
  const isAdmin = sessionStorage.getItem('isAdmin')

  let loggedIn = useSelector(state => state.user.loggedIn)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <Link className="navbar-brand" to="/">eCommerce</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbar-links"
            aria-controls="navbar-links"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbar-links">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/products">Products</NavLink>
              </li>


              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle hidden-arrow"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                 <i className="fas fa-shopping-cart"></i>
                </span>
                <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                  <ShoppingCart />
                </ul>
              </li>
                
              {loggedIn ?
                <div>
                {
                  isAdmin ? <NavLink to="/admin" className="btn btn-warning">Admin</NavLink>
                  : 
                  <NavLink to="/dashboard" className="btn btn-warning">Dashboard</NavLink>
                          
                } 
                <NavLink onClick={() => dispatch(logoutUser())} to="/home" className="btn btn-danger">sign out</NavLink>
                </div>
                : 
                <NavLink to="/login" className="btn btn-warning">Login</NavLink>
              }


            </ul>
          </div>


        </div>
      </nav>
    </div>
  )
}

export default Navbar
