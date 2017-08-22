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
      <div id="home">
        <section className="home__hero">
          <div className="hero__container">
            <h1>Hi, I'm <span>Will</span>.</h1>
            <h2> - I'm a web developer with a love of art, design &amp; psychology.</h2>
            <a href="mailto:wmitbrodt@gmail.com"><h3>Available for freelance work →</h3></a>
          </div>
        </section>
        <section className="home__section__2">

            <h1>Designer/Developer</h1>
            <p>
               Bicycle rights locavore woke waistcoat meditation. Readymade yr gluten-free taiyaki cold-pressed, cray literally chambray plaid.
               Photo booth chambray kinfolk, subway tile next level locavore taxidermy gastropub humblebrag VHS shaman +1 normcore synth.
               Hell of occupy biodiesel godard leggings offal organic helvetica adaptogen you probably haven't heard of them yr typewriter master cleanse slow-carb.
               Offal messenger bag VHS everyday carry food truck. Forage salvia keffiyeh fixie health goth green juice franzen four dollar toast ennui.
               Salvia single-origin coffee hot chicken, chambray shabby chic tote bag kombucha chillwave franzen flexitarian la croix swag tousled coloring book scenester.
               Gastropub pitchfork mlkshk, tumeric seitan shabby chic copper mug readymade narwhal freegan.
            </p>
        </section>
      </div>

    )
  }
}



export default Home;
