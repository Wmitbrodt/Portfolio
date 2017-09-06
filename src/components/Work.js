import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/work/work.css';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import SlideNavAlt from './SlideNavAlt';
import Footer from './Footer';



class Work extends Component {
  render() {
    return (
      <div id="work__container">
        <SlideNavAlt />
        <div>
          <h1>My Work</h1>
        </div>
        <div className="gallery">
          <div className="grid">
            <Link className="cell" to="/work/heritage-apartments">
              <div className="image-1 responsive-image overlay scale">
                <h2>Heritage Apt</h2>
              </div>
            </Link>
            <Link className="cell" to="/work/professor-tripp">
              <div className="image-2 responsive-image overlay scale">
                <h2>Tripp</h2>
              </div>
            </Link>
            <Link className="cell" to="/work/my-wardrobe">
              <div className="image-3 responsive-image overlay scale">
                <h2>My Wardrobe</h2>
              </div>
            </Link>
            <Link className="cell" to="/work/deb-mccoll">
              <div className="image-4 responsive-image overlay scale">
                <h2>Visual Art</h2>
              </div>
            </Link>
          </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Work;
