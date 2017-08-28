import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/about.css';


class About extends Component {
  render() {
    return (
      <div id="about__container">
        <div>
          <h1>About me.</h1>
        </div>
        <div>
          <h3>I love tackling new problems in different ways, by combining my passion for code, technology and psychology.</h3>
          <div>
            <a target="_blank" href="mailto:wmitbrodt@gmail.com"><span>Send me an email →</span></a>
            <br /><br />
          </div>
        </div>

        <div>
          I love tackling new problems in different ways, by combining my passion for code, technology and psychology.
          A Full-Stack Web Developer with a love for Design. Has a strong eye for creativity, effective problem-solving skills and an ability to think critically.
          I am a graduate of the CodeCore Developer Bootcamp. With my skills, I am able to build applications using Ruby on Rails, PostgreSQL, JavaScript, React, Node, Express, jQuery, Git/GitHub, Bootstrap, HTML5, CSS3, and APIs. As an undergraduate in Uvic's psychology program, I enrolled in computer science electives, and fell in love immediately. So much so, I decided to enroll in CodeCore and change career paths.
        </div>

      </div>
    );
  }
}

export default About;
