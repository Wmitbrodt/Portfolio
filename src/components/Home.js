import React, { Component } from 'react';
import '../styles/home.css';
import SlideNav from './SlideNav';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js';


class Home extends Component {
  render() {
    return (
      <div id="home__container">
        <SlideNav />
        <div id="hero">
          <div id="hero__content">
            <h1 className="banner banner--large">
              <span className="🐙">W</span>
              <span className="🐒">e</span>
              <span className="🏋🏿">b</span>
              <span className="😉">&nbsp;</span>
              <span className="🖍">D</span>
              <span className="🏄🏾">e</span>
              <span className="🗿">v</span>
              <span className="🎯">e</span>
              <span className="🏔">l</span>
              <span className="🐝">o</span>
              <span className="🍄">p</span>
              <span className="🌞">e</span>
              <span className="☄️">r</span>

              {/* Web Developer */}
            </h1>

              <h2>
                ...with a love of art, design &amp; psychology.
              </h2>

              <Link to="/contact">
                  <span className="button">Available for freelance work →</span>
              </Link>
          </div>

          <Particles params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#fff'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#fff'
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: '',
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 2,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 20,
                  size_min: 0,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: '#fff',
                opacity: 1,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 3000,
                  rotateY: 3000
                }
              },
              array: []
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                  mode: 'grab'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab:{
                  distance: 100,
                  line_linked:{
                    opacity: 1
                  }
                },
                bubble:{
                  distance: 200,
                  size: 80,
                  duration: 0.4
                },
                repulse:{
                  distance: 200,
                  duration: 0.4
                },
                push:{
                  particles_nb: 4
                },
                remove:{
                  particles_nb: 2
                }
              },
              mouse:{}
            },
            retina_detect: false,
            fn: {
              interact: {},
              modes: {},
              vendors:{}
            },
            tmp: {}
          } }/>



        </div>
        <div id="home-section__main">
          <div id="home__main">
            <div>
              <h2>
                My Expertise
              </h2>
              <h3>
                I've got chops in all phases of the design process.
              </h3>
            </div>

          <div className="col-left__home">
            <div>
              <FontAwesome name='lightbulb-o' />
            </div>

            <h2>
              Ideas
            </h2>

            <p>
              I sketch and wireframe interfaces focusing on content structure,
              intuitive UI patterns and simple interactions.
              I'm a minimalist who truly believes that less is more.
            </p>

          </div>

            <div className="col-center__home">
              <div>
                <FontAwesome name='code' />
              </div>

              <h2>
                Code
              </h2>

              <p>
                I sketch and wireframe interfaces focusing on content structure,
                intuitive UI patterns and simple interactions.
                I'm a minimalist who truly believes that less is more.
              </p>
            </div>

            <div className="col-right__home">
              <div>
                <FontAwesome name='magic' />
              </div>

              <h2>
                UX/UI
              </h2>

              <p>
                I sketch and wireframe interfaces focusing on content structure,
                intuitive UI patterns and simple interactions.
                I'm a minimalist who truly believes that less is more.
              </p>
            </div>
          </div>
        </div>

          <div id="home__work">
            <div>
              <h2>
                Recent Work/Projects
              </h2>
            </div>


            {/* <Link to="/projects/green-eats">
              <div className="work__item green-eats__hover">
                 <h3>Green Eats →</h3>
                 <p>
                   App that enables users to search for the nearest farm or farmers market near them.
                 </p>
              </div>
            </Link>

            <Link to="/work/heritage-apartments">
              <div className="work__item">
                <h3>Victoria Heritage Apartments →</h3>
                <p>
                  App created for a 24-unit, 3 building real estate company located in Victoria, British Columbia.
                </p>
              </div>
            </Link>

            <Link to="/work/professor-tripp">
              <div className="work__item">
                <h3>Professor Tripp →</h3>
                <p>
                  App built using Ruby on Rails. Created for
                  a full-time anthropology professor at Chaffey College in California.
                </p>
              </div>
          </Link> */}

          <ol className='blog-list'>
          <li className='work__item'>
            <Link to="/projects/green-eats">
              <div className="work__item--content">
                 <h3>Green Eats →</h3>
                 <p>
                   App that enables users to search for the nearest farm or farmers market near them.
                 </p>
              </div>
            </Link>
          </li>
          <li className='work__item'>
            <Link to="/work/heritage-apartments">
              <div className="work__item--content">
                <h3>Victoria Heritage Apartments →</h3>
                <p>
                  App created for a 24-unit, 3 building real estate company located in Victoria, British Columbia.
                </p>
              </div>
            </Link>
          </li>
          <li className='work__item'>
            <Link to="/work/professor-tripp">
              <div className="work__item--content">
                <h3>Professor Tripp →</h3>
                <p>
                  App built using Ruby on Rails. Created for
                  a full-time anthropology professor at Chaffey College in California.
                </p>
              </div>
            </Link>
          </li>
        </ol>

          </div>
          <div id="footer__section">
            <Footer />
          </div>
      </div>

    )
  }
}



export default Home;
