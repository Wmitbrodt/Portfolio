import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/projects/projects.css';

class Projects extends Component {
  render() {
    return (
      <div id="project__container">
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
            <Link className="cell" to="/project/professor-tripp">
              <div className="project-image-2 responsive-image overlay scale">
                <h2>Tripp</h2>
              </div>
            </Link>
            <Link className="cell" to="/project/my-wardrobe">
              <div className="project-image-3 responsive-image overlay scale">
                <h2>My Wardrobe</h2>
              </div>
            </Link>
            <Link className="cell" to="/project/deb-mccoll">
              <div className="project-image-4 responsive-image overlay scale">
                <h2>Visual Art</h2>
              </div>
            </Link>
          </div>
      </div>
    </div>
    );
  }
}

export default Projects;
