import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/green-eats.css';
import FontAwesome from 'react-fontawesome';

class GreenEats extends Component {
  render() {
    return (
      <div>
        <div className="green-eats__bg__image">
          <div className="project__show__container">
            <h1>Green Eats</h1>
            <h2>Node JS</h2>
          </div>
        </div>
        <div className="green-eats__bg__main">
          <div className="project__main__container">

            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                Green Eats is a current project I’m working on.
                It’s being built with Node, MongoDB, Google Maps, Passport, Express, Sass, Pug, Webpack, and ES6.
                This application has many features including: user authentication, database storage, Ajax REST API,
                file uploads, image resizing, sending emails, geocoding addresses, password reset, user accounts and much more.
                <br />
                <a target="_blank" href="https://wills-green-eats.herokuapp.com/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
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

          </div>
        </div>
      </div>
    );
  }
}

export default GreenEats;
