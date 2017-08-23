import React, { Component } from 'react';
import { render } from 'react-dom';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/slidenav.css';

class SlideNav extends Component {
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
              <Link id="logo" to="/">W</Link>
              <div id="menuToggle">
                <div style={{ marginTop: '32px' }}>
                    <button className="slide-nav__open" onClick={ () => this.setState({ isPaneOpenRight: true }) }>
                      <div className="hamburger"></div>
                      <div className="hamburger"></div>
                      <div className="hamburger"></div>
                    </button>
                </div>
              </div>
            </div>

              <SlidingPane
                isOpen={ this.state.isPaneOpenRight }
                // title='n/a'
                from='right'
                width='200px'
                onRequestClose={ () => this.setState({ isPaneOpenRight: false }) }>
                  <div>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="about"><li>About Me</li></Link>
                    <Link to="/work"><li>My Work</li></Link>
                    <Link to="/projects"><li>Some Projects</li></Link>
                    <Link to="/contact"><li>Say Hi 👋🏼</li></Link>


                  </div>
              </SlidingPane>
          </div>
        )
    }
}

export default SlideNav;
