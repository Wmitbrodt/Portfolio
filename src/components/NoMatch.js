import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/404.css';

class NoMatch extends Component {
  render() {
    return (
      <div id="no__match">
        <h2>
          OOPS! 😱
        </h2>
        <h4>
          LOOKS LIKE YOU LANDED ON A PAGE THAT DOESN'T EXIST (YET 🤔).
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
