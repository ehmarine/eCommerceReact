import './App.css';
import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { checkUser } from './store/actions/userActions'
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import Details from './views/Details';
import LoginView from './views/LoginView';
import CheckOut from './views/CheckOut';
import Dashboard from './views/Dashboard';
import Admin from './views/Admin';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
