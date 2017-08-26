import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/undefined-drillz.css';
import FontAwesome from 'react-fontawesome';

class UndefinedDrillz extends Component {
  render() {
    return (
      <div>
        <div className="undefined-drillz__bg__image">
          <div className="project__show__container">
            <h1>Undefined Drillz</h1>
            <h2>Ruby on Rails</h2>
          </div>
        </div>
        <div className="undefined-drillz__bg__main">
          <div className="project__main__container">

            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                Undefined Drills is a group project, consisting of 6 members, that was built over a weekend
                as a 'mini-hackathon' challenge. This project relied heavily on team collaboration and the use of Git/GitHub.
                It is a web application that allows users to practice coding drills and was built with JavaScript, jQuery, AJAX,
                Ruby on Rails, PostgreSQL, Git/GitHub, Bootstrap, and HTML5/CSS3.
                <br />
                <a target="_blank" href="http://undefineddrills.herokuapp.com/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
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

export default UndefinedDrillz;
