import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/work.css';


class Work extends Component {
  render() {
    return (
      <div id="work__container">
        <div>
          <h1>My Work.</h1>
        </div>
        <div className="gallery">
          <div className="grid">
            <Link className="cell" to="/work/professor-tripp">
              <div className="image-1 responsive-image overlay scale">
                <h2>D. McColl</h2>
              </div>
            </Link>
            <Link className="cell" to="/work/professor-tripp">
              <div className="image-2 responsive-image overlay scale">
                <h2>Tripp</h2>
              </div>
            </Link>
            <Link className="cell" to="/work/professor-tripp">
              <div className="image-3 responsive-image overlay scale">
                <h2>Skyscrapers</h2>
              </div>
            </Link>
            <Link className="cell" to="/work/professor-tripp">
              <div className="image-4 responsive-image overlay scale">
                <h2>Skyscrapers</h2>
              </div>
            </Link>
            <Link className="cell" to="/work/professor-tripp">
              <div className="image-5 responsive-image overlay scale">
                <h2>Skyscrapers</h2>
              </div>
            </Link>
            <Link className="cell" to="/work/professor-tripp">
              <div className="image-6 responsive-image overlay scale">
                <h2>Skyscrapers</h2>
              </div>
            </Link>
          </div>
      </div>
    </div>
    );
  }
}

export default Work;
