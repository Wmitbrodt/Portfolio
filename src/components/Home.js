import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WOW from 'wowjs';
import '../styles/home.css';



class Home extends Component {
  componentDidMount() {
      new WOW.WOW().init();
    }

  render() {
    return (
      <div id="home__hero">
        <h1>Hi, I'm <span>Will</span>.</h1>
          <h2> - I'm a web developer with a love of art, design &amp; psychology.</h2>
          <a href="mailto:wmitbrodt@gmail.com"><h3>Available for freelance work →</h3></a>
      </div>

    )
  }
}



export default Home;
