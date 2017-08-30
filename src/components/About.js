import React, { Component } from 'react'
import '../styles/about.css';


class About extends Component {
  render() {
    return (
      <div id="about__container">
        <div>
          <h1>About me.</h1>
        </div>
        <div>
          <h3>I love tackling new problems in different ways, by combining my passion for art, code, psychology and technology.</h3>
          <div>
            <a href="https://s3-us-west-2.amazonaws.com/portfolio-will/documents/will_mitbrodt_cv.pdf" target="_blank"><span>Download CV →</span></a>
            <br /><br />
          </div>
        </div>

        <div>
          <h3>
            I'm Will, a Full-Stack Web Developer with a passion for Design.
            I am a graduate of the<a target="_blank" href="https://codecore.ca/"><span> CodeCore Developer Bootcamp</span></a> and the
            <a target="_blank" href="https://www.uvic.ca/"><span> University of Victoria</span></a>.
          </h3>

          <h3>
            With my skills, I am able to build a variety of applications using technologies such as:
            React, Ruby on Rails, Node, Express, JavaScript, jQuery, Bootstrap and Flexbox - to name a few.
          </h3>

          <h3>
            As an undergraduate in Uvic's psychology program, I enrolled in computer science electives, and fell in love immediately. So much so, I decided to enroll in CodeCore and change career paths.
          </h3>

          <h3>
            My design philosopy is about focusing on essentials by keeping the elements simple and clean.
            Every design element needs certain amount of room to “breath” and to balance out other elements as well.
            Less is more: Good design is as little design as possible.
          </h3>
        </div>

      </div>
    );
  }
}

export default About;
