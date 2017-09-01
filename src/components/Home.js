import React, { Component } from 'react';
import WOW from 'wowjs';
import '../styles/home.css';
import SlideNav from './SlideNav';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';



class Home extends Component {
  componentDidMount() {
      new WOW.WOW().init();
    }

  render() {
    return (
      <div id="home__hero">
        <SlideNav />
          <h1>Hi, I'm Will.</h1>
            <h2>
              A web developer with a love of art, design &amp; psychology.
            </h2>
              <a target="_blank" rel="noopener noreferrer" href="mailto:wmitbrodt@gmail.com"><span>Available for freelance work </span> <FontAwesome name='long-arrow-right' /></a>
              <br /><br /><br /><br />

            <div id="home__container">

              <div>
                <h2>
                  My Skillset
                </h2>
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
        <Footer />
      </div>

    )
  }
}



export default Home;
