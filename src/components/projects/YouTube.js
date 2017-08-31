import React, { Component } from 'react'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/you-tube.css';
import FontAwesome from 'react-fontawesome';
import SlideNav from '../SlideNav';

class YouTube extends Component {
  render() {
    return (
      <div>
        <SlideNav />
        <div className="you-tube__bg__image">

          <div className="hero__header">
            <h1>YouTube Search API</h1>
            <h2>React JS</h2>
          </div>

        </div>
        <div className="work__hero__container">

          <div className="box-1">
            <h1><span>About</span></h1>
          </div>

          <div className="box-2">
            <h2>
                A mini react application that utilizes YouTube’s API to fetch videos.
                It is able to instantly search for any video on YouTube’s vast library and instantly play them.
                It was built using React, Node, and Bootstrap.
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wmitbrodt/youtubeSearchAPI"><span>Check it out on Github</span></a> <FontAwesome name='long-arrow-right' />
              </h2>
          </div>
        </div>

        <div className="you-tube__bg__main">
          <div className="work__main__container">

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>React JS.</li>
                <li>Lodash</li>
                <li>Redux.</li>
                <li>React Router</li>
                <li>Youtube API Search</li>
                <li>Twitter Bootstrap</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default YouTube;
