import React, { Component } from 'react'
import '../../styles/work/work-show.css';
import '../../styles/work/heritage-apartments.css';
import FontAwesome from 'react-fontawesome';
import SlideNav from '../SlideNav';
import Footer from '../Footer';

class HeritageApartments extends Component {
  render() {
    return (
      <div>
        <SlideNav />
        <div className="heritage__bg__image">

          <div className="hero__header">
            <h1>Victoria Heritage Apartments</h1>
            <h2>Ruby on Rails</h2>
          </div>

        </div>
        <div className="heritage__hero__container">
          <div className="work__hero__container">
            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                Victoria Heritage Apartments is a 24-unit, 3 building real estate company located in Victoria, British Columbia. This application has many features
                including: user authentication, user authorization, S3 file uploads, Google Maps and much more.
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href="http://www.heritageapartments.ca/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
              </h2>
            </div>
          </div>
        </div>

        <div className="heritage__bg__main">
          <div className="work__main__container">

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>Ruby on Rails - server-side web application framework written in Ruby under the MIT License.</li>
                <li>Twitter Bootstrap - the most popular front-end framework.</li>
                <li>Font Awesome - The iconic font and CSS toolkit</li>
                <li>Sass - the most mature, stable, and powerful professional grade CSS extension language in the world..</li>
                <li>jQuery - javascript library.</li>
                <li>PostgreSQL - is an advanced object-relational database management system.</li>
              </ul>
            </div>
          </div>
          <div id="footer__section">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default HeritageApartments;
