import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Allproductspage from "./Components/Allproductspage";
import ViewProduct from "./Components/viewProduct";
import AddProduct from "./Components/addproduct";
import Login from "./Components/login";
import SimpleTabs from "./Components/editFamily";

class App extends React.Component {
constructor() {
super();
this.state = {
      currentUser: null
      }
}
componentDidMount() {
this.setState({currentUser: localStorage.getItem('username')})
}

logout() {
      window.location.href = '/login';
  }
render() {
 const { currentUser } = this.state;
 console.log(currentUser);
  return (
      <Router>
      {currentUser &&
       <nav className="navbar navbar-expand navbar-dark">
                    <div className="navbar-nav">
        <Link to='/' className="nav-item nav-link">Family Members</Link>
         <a className="nav-item nav-link" onClick={this.logout}>Logout</a>
         </div>
         </nav>
         }
        <Switch>
<Route exact path='/product/:id' component={ViewProduct}/>
<Route exact path='/addFamily' component={AddProduct}/>
<Route exact path='/login' component={Login}/>
<Route exact path='/' component={Allproductspage}/>
<Route exact path='/editfamily/:id' component={SimpleTabs}/>
        </Switch>
      </Router>
  );
}
}

export default App;
