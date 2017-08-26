import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/you-tube.css';
import FontAwesome from 'react-fontawesome';

class YouTube extends Component {
  render() {
    return (
      <div>
        <div className="you-tube__bg__image">
          <div className="project__show__container">
            <h1>YouTube Search API</h1>
            <h2>React JS</h2>
          </div>
        </div>
        <div className="you-tube__bg__main">
          <div className="project__main__container">

            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                A mini react application that utilizes YouTube’s API to fetch videos.
                It is able to instantly search for any video on YouTube’s vast library and instantly play them.
                It was built using React, Node, and Bootstrap.
                <br />
                <a target="_blank" href="https://github.com/Wmitbrodt/youtubeSearchAPI"><span>Check it out on Github</span></a> <FontAwesome name='long-arrow-right' />
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

export default YouTube;
