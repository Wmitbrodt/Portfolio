import React, { Component } from 'react'
import '../styles/about.css';
import SlideNav from './SlideNav';
import FooterAlt from './FooterAlt';
import { Link } from 'react-router-dom'


class About extends Component {
  render() {
    return (
      <div id="about__container">
        <SlideNav />
        <h1>About me</h1>

        <div className="about__hero__container">

          <div className="col-left">
            <h3>I love tackling new problems in different ways, by combining my passion for art, code, psychology and technology.</h3>

            <Link className="hover" target="_blank" to="https://s3-us-west-2.amazonaws.com/portfolio-will/documents/will_mitbrodt_resume.pdf">
                <span className="span__underline hover">Download CV</span> <span className="arrow-right">→</span>
            </Link>

           <div id="me">
           </div>

          </div>

          <div className="col-right">
            <h3>
              I'm Will, a Full-Stack Web Developer with a passion for Design.
              I am a graduate of the<a target="_blank" rel="noopener noreferrer" href="https://codecore.ca/"><span> CodeCore Developer Bootcamp</span></a>,
              the <a target="_blank" href="https://www.uvic.ca/" rel="noopener noreferrer"><span> University of Victoria</span></a> and <a target="_blank" href="http://camosun.ca/" rel="noopener noreferrer"><span> Camosun College</span></a>.
            </h3>
            <h3>
              With my skills, I am able to build a variety of applications using technologies such as:
              React, Ruby on Rails, Node, Express, JavaScript, jQuery, Bootstrap and Flexbox - to name a few.
            </h3>
            <h3>
              As an undergraduate in Uvic's psychology program, I enrolled in computer science electives,
              and fell in love immediately. So much so, I decided to enroll in CodeCore and change career paths.
            </h3>

            <h3>
              At Camosun College, in the Arts and Sciences department, I took several courses including:
              animation, art theory, drawing, filmmaking, printmaking, painting, graphic design, ceramics, sculpture, 3D design, video,
              modern art history, and photography.
            </h3>

            <h3>
              My design philosopy is about focusing on essentials by keeping the elements simple and clean.
              Every design element needs certain amount of room to “breath” and to balance out other elements as well.
              Less is more - Good design is as little design as possible.
            </h3>
          </div>
        </div>
        <FooterAlt />
    </div>

    );
  }
}

export default About;
