import React, { Component } from 'react';
import $ from 'jquery';
import M from 'materialize-css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="nav-wrapper transparent">
          <div className="container">
              <a href="#" className="brand-logo">Photo CO.</a>
              <a href="#" className="sidenav-trigger" data-target="mobile-menu"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                  <li><a href="#photos">Photos</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#connect">Contact</a></li>
              </ul>
          </div>

          <ul className="sidenav grey lighten-3" id="mobile-menu">
            <li><a href="#photos">Photos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#connect">Contact</a></li>
          </ul>
      </nav>
    )
  }
}
