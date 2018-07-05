import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/404.css';
import FontAwesome from 'react-fontawesome';

class NoMatch extends Component {
  render() {
    return (
      <div id="no__match">
        <h2>
          OOPS! <FontAwesome name='chain-broken' />
        </h2>
        <h3>
          It appears you wound up on a page that doesn't exist...yet.
        </h3>
        <h5>
          <Link to="/">
            You can always return <span>home</span>?
          </Link>
        </h5>
        <h1>
          404
        </h1>
      </div>
    );
  }
}

export default NoMatch;
