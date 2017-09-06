import React, { Component } from 'react'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/retro-video-games.css';
import FontAwesome from 'react-fontawesome';
import SlideNav from '../SlideNav';
import FooterAlt from '../FooterAlt';

class RetroVideoGames extends Component {
  render() {
    return (
      <div>
        <SlideNav />
        <div className="retro-video-games__bg__image">

          <div className="hero__header">
            <h1>Retro Video Games</h1>
            <h2>Ruby on Rails</h2>
          </div>

        </div>
        <div className="retro-video-games__hero__container">
          <div className="project_hero__container">
            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                  Retro Video Game Reviews is a Ruby on Rails application that has the ability to search with Elasticsearch,
                  upload files, and create reviews with one to many associations. It also has user authentication and
                  authorization with devise.
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href="https://wills-videogames.herokuapp.com/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
                </h2>
            </div>
          </div>
        </div>

        <div className="retro-video-games__bg__main">
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
                <li>SendGrid - Delivering your transactional and marketing email through one reliable platform.</li>
                <li>jQuery - javascript library.</li>
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

export default RetroVideoGames;
