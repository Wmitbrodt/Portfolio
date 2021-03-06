import React, { Component } from 'react'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/bankr.css';
import FontAwesome from 'react-fontawesome';
import SlideNav from '../SlideNav';
import FooterAlt from '../FooterAlt';

class Bankr extends Component {
  render() {
    return (
      <div>
        <SlideNav />
        <div className="bankr__bg__image">

          <div className="hero__header">
            <h1>Bankr</h1>
            <h2>React & Rails</h2>
          </div>

        </div>
        <div className="bankr__hero__container">
          <div className="project_hero__container">
            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h3>
                A personal bank balance application that was built with a Rails backend and a React front-end.
                It allows users to seamlessly keep track of their personal expenses.
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://wills-accounts.herokuapp.com/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
              </h3>
            </div>
          </div>
        </div>

        <div className="bankr__bg__main">
          <div className="work__main__container">

            <div className="box-3">
              <h1>
                Tech
              </h1>
            </div>

            <div className="box-4">
              <ul>
                <li>Ruby on Rails - server-side web application framework written in Ruby under the MIT License.</li>
                <li>Twitter Bootstrap - the most popular front-end framework.</li>
                <li>Font Awesome - The iconic font and CSS toolkit</li>
                <li>react-rails - Integrate React.js with Rails views and controllers, the asset pipeline, or webpacker.</li>
                <li>postgresql -PostgreSQL is an advanced object-relational database management system.</li>
              </ul>
            </div>
          </div>
          <div id="footer__section--alt">
            <FooterAlt />
          </div>
        </div>
      </div>
    );
  }
}

export default Bankr;
