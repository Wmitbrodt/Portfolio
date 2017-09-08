import React, { Component } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { Link } from 'react-router-dom'
import '../styles/slidenav.css';
import FontAwesome from 'react-fontawesome';


class SlideNavAlt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenRight: false
        };
    }

    render() {
        return (
          <div>
            <div id="nav">
              <Link id="logo-alt" to="/">W</Link>
              <div id="menuToggle">
                <div style={{ marginTop: '32px' }}>
                    <button className="slide-nav__open" onClick={ () => this.setState({ isPaneOpenRight: true }) }>
                      <div className="hamburger-alt"></div>
                      <div className="hamburger-alt"></div>
                      <div className="hamburger-alt"></div>
                    </button>
                </div>
              </div>
            </div>

            <SlidingPane
              isOpen={ this.state.isPaneOpenRight }
              from='right'
              width='200px'
              onRequestClose={ () => this.setState({ isPaneOpenRight: false }) }>
                <div>
                  <Link className="nav__item" to="/"><li>Home</li></Link>
                  <Link className="nav__item" to="/about"><li>About</li></Link>
                  <Link className="nav__item" to="/work"><li>Work</li></Link>
                  <Link className="nav__item" to="/projects"><li>Projects</li></Link>
                  <Link className="nav__item" to="/contact"><li>Get in touch</li></Link>
                  <div className="nav__icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/WillMitbrodt"><FontAwesome name='linkedin' /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wmitbrodt"><FontAwesome name='github' /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/WillMitbrodt"><FontAwesome name='twitter' /></a>
                  </div>
                </div>
            </SlidingPane>
          </div>
        )
    }
}

export default SlideNavAlt;
