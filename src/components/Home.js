import React, { Component } from 'react';
import '../styles/home.css';
import SlideNav from './SlideNavAlt';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js';


class Home extends Component {
  render() {
    return (
      <div id="home__container">
        <SlideNav />
        <div id="hero">
          <div id="hero__content">
            <h1 className="banner">
              <span className="🐙">W</span>
              <span className="🐒">i</span>
              <span className="🏋🏿">l</span>
              <span className="🍻">l</span>
              <span className="😉">&nbsp;</span>
              <span className="🖍">M</span>
              <span className="🏄🏾">i</span>
              <span className="🗿">t</span>
              <span className="🎯">b</span>
              <span className="🏔">r</span>
              <span className="🐝">o</span>
              <span className="🍄">d</span>
              <span className="🌞">t</span>
            </h1>

            <h3>
              Currently based in Victoria, BC, I'm a Full-Stack Web Developer at <a target="_blank" rel="noopener noreferrer" href="http://tinyboards.co/"><mark>Tiny Boards.</mark></a>
            </h3>

            <Link to="/contact">
                <span className="button">Get in touch →</span>
            </Link>
          </div>

          <div id="footer__section">
           <Footer />
         </div>

          <Particles params={{
            "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 2800
      }
    },
    "color": {
      "value": ["#1e39d7", "#601ed7", "#bd1ed7", "#1ed760"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 5,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
            fn: {
              interact: {},
              modes: {},
              vendors:{}
            },
            tmp: {}
          } }/>




        </div>

      </div>

    )
  }
}



export default Home;
