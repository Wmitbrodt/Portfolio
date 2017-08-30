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
        <h4>
          LOOKS LIKE YOU LANDED ON A PAGE THAT DOESN'T EXIST (YET).
        </h4>
        <h5>
          <Link to="/">
            Want to <span>return home</span>?
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
