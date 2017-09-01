import React, { Component } from 'react'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/undefined-drillz.css';
import FontAwesome from 'react-fontawesome';
import SlideNav from '../SlideNav';
import Footer from '../Footer';

class UndefinedDrillz extends Component {
  render() {
    return (
      <div>
        <SlideNav />
        <div className="undefined-drillz__bg__image">

          <div className="hero__header">
            <h1>Undefined Drillz</h1>
            <h2>Ruby on Rails</h2>
          </div>

        </div>
        <div className="work__hero__container">

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
                <a target="_blank" rel="noopener noreferrer" href="http://undefineddrills.herokuapp.com/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
              </h2>
          </div>
        </div>

        <div className="undefined-drillz__bg__main">
          <div className="work__main__container">

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>Ruby on Rails - server-side web application framework written in Ruby under the MIT License.</li>
                <li>Cancancan - The authorization Gem for Ruby on Rails.</li>
                <li>Groupdate - The simplest way to group temporal data</li>
                <li>Chartkick - Create beautiful Javascript charts with one line of Ruby.</li>
                <li>Omniauth-twitter/facebook</li>
                <li>PostgreSQL - is an advanced object-relational database management system.</li>
              </ul>
            </div>
          </div>
          <div className="box-5">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default UndefinedDrillz;
