import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import {connect} from 'react-redux'
import Home from '../src/components/common/home'
import Register from '../src/components/users/register'
import Login from '../src/components/users/login'
import Contacts from '../src/components/contacts/list'
import ContactNew from '../src/components/contacts/new'
import ContactEdit from '../src/components/contacts/edit'
import ContactShow from '../src/components/contacts/show'
import PrivateRoute from './components/privateRoute'
import {logoutUser} from './actions/user'

function App(props) {
  function handleLogout() {
    props.dispatch(logoutUser())
  }
  return (
    <div>
    <BrowserRouter>
    <div>
      {!localStorage.getItem('authToken') ? 
    (<Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#"><h1>CONTACTS_@_APP</h1></Navbar.Brand> 
      <Nav.Link href="/"><Link to="/">HOME</Link></Nav.Link>
      <Nav.Link href="#"><Link to="/users/register">REGISTER</Link> </Nav.Link> 
 <Nav.Link href="#"><Link to="/users/login">LOGIN</Link> </Nav.Link>  
    </Navbar> ) : (
<Navbar bg="dark" variant="primary">
<Navbar.Brand href="#"><h1>CONTACTS_@_APP</h1></Navbar.Brand> 
<Nav.Link href="/"><Link to="/">HOME</Link></Nav.Link>
 <Nav.Link href="#"><Link to="/contacts">CONTACTS</Link></Nav.Link>
 <Nav.Link href="#"><Link to="#" onClick={()=>{handleLogout()}}>LOGOUT</Link></Nav.Link> 
 <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      <h2 className="text-warning">{props.user.username}</h2>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>)   }

      <Route path="/" component={Home} exact={true}/>
      <Route path="/users/register" component={Register} />
      <Route path="/users/login" component={Login} />
      <PrivateRoute path="/contacts" component={Contacts} exact={true} />
      <PrivateRoute path="/contacts/new" component={ContactNew}/>
      <PrivateRoute path="/contacts/edit/:id" component={ContactEdit}/>
      <PrivateRoute path="/contacts/show/:id" component={ContactShow} />
    </div>
    </BrowserRouter>
    </div>
  );
}
const mapStateToProps=(state)=> {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(App)
