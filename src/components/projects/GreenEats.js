import React, { Component } from 'react'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/green-eats.css';
import FontAwesome from 'react-fontawesome';
import SlideNav from '../SlideNav';

class GreenEats extends Component {
  render() {
    return (
      <div>
        <SlideNav />
        <div className="green-eats__bg__image">

          <div className="hero__header">
            <h1>Green Eats</h1>
            <h2>Node JS</h2>
          </div>

        </div>
        <div className="work__hero__container">

          <div className="box-1">
            <h1><span>About</span></h1>
          </div>

          <div className="box-2">
            <h2>
                Green Eats is a current project I’m working on. It enables users to search for the nearest farm or farmers market near them.
                This application has many features including: user authentication, database storage, Ajax REST API,
                file uploads, image resizing, sending emails, geocoding addresses, password reset, user accounts and much more.
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://wills-green-eats.herokuapp.com/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
              </h2>
          </div>
        </div>

        <div className="green-eats__bg__main">
          <div className="work__main__container">

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>Passport - Simple, unobtrusive authentication for Node.js.</li>
                <li>Node JS</li>
                <li>MongoDB - a free and open-source cross-platform document-oriented database program.</li>
                <li>Google Maps.</li>
                <li>Sass</li>
                <li>Pug - template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default GreenEats;
