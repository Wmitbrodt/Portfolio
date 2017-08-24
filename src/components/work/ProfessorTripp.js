import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/professor-tripp.css';

class ProfessorTripp extends Component {
  render() {
    return (
      <div>
        <div className="prof__bg__image">
          <div className="work__show__container">
            <h1>Professor Tripp:</h1>
            <h2>Ruby on Rails</h2>
          </div>
        </div>
        <div className="prof__bg__main">
          <div className="work__main__container">

            <div className="box-1">
              <h1><span>Background</span></h1>
            </div>

            <div className="box-2">
              <h2>
                The HootBoard App is the place people connect with and find out the latest about the organizations they care about most.
                This app is part of the comprehensive bulletin board platform that works seamlessly across web, mobile, interactive screens,
                digital signage and AI generated newsletters. This is all accomplished from one easy posting process.
              </h2>
            </div>

            <div className="box-3">
              <h1><span>Tech Stack</span></h1>
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

export default ProfessorTripp;
