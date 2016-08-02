import React, { Component } from 'react'

import AccountsUIWrapper from './AccountsUIWrapper.jsx';


export default class Login extends Component {
  render() {
    return (
      <div className='row'>
        <a href='#/'>back | </a>
        <AccountsUIWrapper align="right"/>
      </div>
    )
  }
}