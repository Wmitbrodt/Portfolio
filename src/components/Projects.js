import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/projects/projects.css';
import SlideNavAlt from './SlideNavAlt';
import Footer from './Footer';

class Projects extends Component {
  render() {
    return (
      <div id="project__container">
        <SlideNavAlt />

        <div>
          <h1>Projects.</h1>
        </div>
        <div className="gallery">
          <div className="grid">
            <Link className="cell" to="/projects/green-eats">
              <div className="project-image-1 responsive-image overlay scale">
                <h2>Green Eats</h2>
              </div>
            </Link>

            <Link className="cell" to="/projects/you-tube-search-api">
              <div className="project-image-2 responsive-image overlay scale">
                <h2>Search API</h2>
              </div>
            </Link>

            <Link className="cell" to="/projects/bankr">
              <div className="project-image-3 responsive-image overlay scale">
                <h2>Bankr</h2>
              </div>
            </Link>

            <Link className="cell" to="/projects/slackr">
              <div className="project-image-4 responsive-image overlay scale">
                <h2>Slackr</h2>
              </div>
            </Link>

            <Link className="cell" to="/projects/undefined-drillz">
              <div className="project-image-5 responsive-image overlay scale">
                <h2>Drillz</h2>
              </div>
            </Link>

            <Link className="cell" to="/projects/retro-video-games">
              <div className="project-image-6 responsive-image overlay scale">
                <h2>Retro Games</h2>
              </div>
            </Link>

            <Link className="cell" to="/projects/job-board">
              <div className="project-image-7 responsive-image overlay scale">
                <h2>Job Board</h2>
              </div>
            </Link>

            <Link className="cell" to="/projects/recipes">
              <div className="project-image-8 responsive-image overlay scale">
                <h2>Recipes</h2>
              </div>
            </Link>
          </div>
      </div>
     <Footer />
    </div>
    );
  }
}

export default Projects;
