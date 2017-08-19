import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import WOW from 'wowjs';


class Home extends Component {
  componentDidMount() {
      new WOW.WOW().init();
    }

  render() {
    return (
      <div id="home">
        <section className="home__hero">
          <div className="container__hero">

            <h1 className="hero__will">Will Mitbrodt</h1>
            <p>
               Bicycle rights locavore woke waistcoat meditation. Readymade yr gluten-free taiyaki cold-pressed, cray literally chambray plaid.
               Photo booth chambray kinfolk, subway tile next level locavore taxidermy gastropub humblebrag VHS shaman +1 normcore synth.
               Hell of occupy biodiesel godard leggings offal organic helvetica adaptogen you probably haven't heard of them yr typewriter master cleanse slow-carb.
               Offal messenger bag VHS everyday carry food truck. Forage salvia keffiyeh fixie health goth green juice franzen four dollar toast ennui.
               Salvia single-origin coffee hot chicken, chambray shabby chic tote bag kombucha chillwave franzen flexitarian la croix swag tousled coloring book scenester.
               Gastropub pitchfork mlkshk, tumeric seitan shabby chic copper mug readymade narwhal freegan.
            </p>
          </div>
          <ul className="particles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="element"></div>
        </section>
        <section className="home__section__2">

            <h1>Will Mitbrodt</h1>
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
