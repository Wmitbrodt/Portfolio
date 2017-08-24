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
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                  Professor Tripp is a web application I built using Ruby on Rails. It was created for
                  a full-time anthropology professor at Chaffey College in California. While conduction research for
                  this project, I immediately noticed that most professor website's are dull and dry.
                  I decided to sway from this trend, and make hers fun, interactive and most of all - different.
                  Features include: user authentication, user authorization, emails with Send
                  Grid, SEO, and much more.
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
              <Link to="/work">← Back</Link>
              <Link to="/work">Next →</Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ProfessorTripp;
