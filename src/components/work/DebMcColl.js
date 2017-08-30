import React, { Component } from 'react'
import '../../styles/work/work-show.css';
import '../../styles/work/deb-mccoll.css';
import FontAwesome from 'react-fontawesome';

class DebMcColl extends Component {
  render() {
    return (
      <div>
        <div className="deb__bg__image">

          <div className="hero__header">
            <h1>Deborah McColl</h1>
            <h2>Visual Artist</h2>
          </div>

        </div>
        <div className="work__hero__container">

          <div className="box-1">
            <h1><span>About</span></h1>
          </div>

          <div className="box-2">
            <h2>
              Deborah McColl is a visual artist located in Victoria BC, Canada. Works include: Paintings, Printmaking, Drawings and Photography.
              There's something about how gallery spaces are arranged that brings out the best in the pieces.
              This project attempts to bring the physical gallery experience to a virtual space.
              <br />
              <a target="_blank" rel="noopener noreferrer" href="http://www.deborah-mccoll.ca/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
            </h2>
          </div>
        </div>

        <div className="deb__bg__main">
          <div className="work__main__container">

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>Twitter Bootstrap - the most popular front-end framework.</li>
                <li>Photoshop - The world's leader in digital imaging</li>
                <li>Photoshop - The world's leader in digital imaging.</li>
                <li>CSS3 / HTML5</li>
                <li>jQuery - javascript library.</li>
                <li>Cloudflare - A Growing Global Network Built for Scale.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default DebMcColl;
