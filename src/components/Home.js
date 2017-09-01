import React, { Component } from 'react';
import WOW from 'wowjs';
import '../styles/home.css';
import SlideNav from './SlideNav';
import Footer from './Footer';



class Home extends Component {
  componentDidMount() {
      new WOW.WOW().init();
    }

  render() {
    return (
      <div id="home__hero">
        <SlideNav />
        <h1>Hi, I'm <span>Will</span>.</h1>
          <h2> - I'm a web developer with a love of art, design &amp; psychology.</h2>
          <a target="_blank" rel="noopener noreferrer" href="mailto:wmitbrodt@gmail.com"><h3>Available for freelance work →</h3></a>
          <Footer />
      </div>

    )
  }
}



export default Home;
