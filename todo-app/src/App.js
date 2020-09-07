import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './contact';
import App from './cctodo'




class Nav extends Component {
  render() {
    return (
    <Router>
        <h1>Financial Aid To Do Application</h1>
        <div>
          <nav class="topnav">
          <ul class="listnav">
            <li><Link to={'/cctodo'} class="nav-link"> To Do List </Link></li>
            <li><Link to={'/contact'} class="nav-link"> Contact </Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/cctodo' component={App} />
              <Route path= '/contact' component={Contact} />
          </Switch>
          
        </div>
      </Router>
    )
  }
}
export default Nav;

