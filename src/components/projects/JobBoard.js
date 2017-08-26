import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/job-board.css';
import FontAwesome from 'react-fontawesome';

class JobBoard extends Component {
  render() {
    return (
      <div>
        <div className="job-board__bg__image">
          <div className="project__show__container">
            <h1>Job Board</h1>
            <h2>Ruby on Rails</h2>
          </div>
        </div>
        <div className="job-board__bg__main">
          <div className="project__main__container">

            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                Ruby on Rails application that allows users to search for job positions based on several different categories.
                This was one of the first projects I did, and it really gave me a strong grasp of the M.V.C. architectural pattern.
                <br />
                <a target="_blank" href="https://wills-jobs-board.herokuapp.com/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
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

export default JobBoard;
