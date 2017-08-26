import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/bankr.css';
import FontAwesome from 'react-fontawesome';

class Bankr extends Component {
  render() {
    return (
      <div>
        <div className="bankr__bg__image">
          <div className="project__show__container">
            <h1>Bankr</h1>
            <h2>React & Rails</h2>
          </div>
        </div>
        <div className="bankr__bg__main">
          <div className="project__main__container">

            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                A personal bank balance application that was built with a Rails backend and a React front-end.
                It allows users to seamlessly keep track of their personal expenses.
              </h2>
            </div>

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>Ruby on Rails - server-side web application framework written in Ruby under the MIT License.</li>
                <li>Twitter Bootstrap - the most popular front-end framework.</li>
                <li>Font Awesome - The iconic font and CSS toolkit</li>
                <li>SendGrid - Delivering your transactional and marketing email through one reliable platform.</li>
                <li>jQuery - javascript library.</li>
                <li>postgresql -PostgreSQL is an advanced object-relational database management system.</li>
              </ul>
            </div>
            <div className="box-5">
              <Link to="/projects"><FontAwesome name='long-arrow-left' /> Back</Link>
              <Link to="/projects">Next <FontAwesome name='long-arrow-right' /></Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Bankr;
