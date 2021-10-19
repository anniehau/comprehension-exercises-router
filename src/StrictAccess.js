import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user;
    console.log(username, password)
    if (username === 'joao' && password === '1234') {
      console.log('deveria ir')
      return (
        <p>Welcome {username}!</p>
      )
    }
    alert('Access denied');
    return <Redirect to="/" />
  }
}

export default StrictAccess;
