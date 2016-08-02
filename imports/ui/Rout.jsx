import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import home from './App.jsx';
import login from './login.jsx';


export default class App2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }
  render() {
    let App
        
    switch (this.state.route) {
      case '/#':      App = home; break;
      case '/login':  App = login; break;
      default: App = home;
    }
    // console.log('App.render')
    return (
      <div>
        <App />
      </div>
    );
  }
}