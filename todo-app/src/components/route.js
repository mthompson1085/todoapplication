import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from '/contact';
import App from '.todo-app\src\App.js'
import '/App.css'




class Nav extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="topnav">
          <ul className="listnav">
            <li ><Link to={'/'} className="nav-link"> To Do List </Link></li>
            <li class= "nav-link"><Link to={'/contact'} className="nav-link"> Contact</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={App} />
              <Route path= '/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Nav;

