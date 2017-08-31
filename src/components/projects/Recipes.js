import React, { Component } from 'react'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/recipes.css';
import FontAwesome from 'react-fontawesome';
import SlideNav from '../SlideNav';

class Recipes extends Component {
  render() {
    return (
      <div>
        <SlideNav />
        <div className="recipes__bg__image">

          <div className="hero__header">
            <h1>Recipes</h1>
            <h2>Ruby on Rails</h2>
          </div>

        </div>
        <div className="work__hero__container">

          <div className="box-1">
            <h1><span>About</span></h1>
          </div>

          <div className="box-2">
            <h2>
                My very first Ruby on Rails application.
                I decided to implement many of the things I had learnt into a working application.
                Users can upload files, and create recipes, and dynamically add and delete ingredients/directions.
                It also has user authentication and authorization with devise.
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://wills-recipes.herokuapp.com/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
              </h2>
          </div>
        </div>

        <div className="recipes__bg__main">
          <div className="work__main__container">

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>Ruby on Rails - server-side web application framework written in Ruby under the MIT License.</li>
                <li>Cocoon - Dynamic nested forms using jQuery made easy.</li>
                <li>Devise - Flexible authentication solution for Rails with Warden.</li>
                <li>jQuery - javascript library.</li>
                <li>AWS S3 - Store data in the cloud.</li>
                <li>Disqus - add-on tools for websites to increase engagement</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Recipes;
