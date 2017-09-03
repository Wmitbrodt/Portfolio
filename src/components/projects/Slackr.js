import React, { Component } from 'react'
import '../../styles/projects/projects-show.css';
import '../../styles/projects/slackr.css';
import FontAwesome from 'react-fontawesome';
import SlideNav from '../SlideNav';
import Footer from '../Footer';


class Slackr extends Component {
  render() {
    return (
      <div>
        <SlideNav />
        <div className="slackr__bg__image">

          <div className="hero__header">
            <h1>Slackr</h1>
            <h2>React JS</h2>
          </div>

        </div>
        <div className="work__hero__container">

          <div className="box-1">
            <h1><span>About</span></h1>
          </div>

          <div className="box-2">
            <h2>
                I really wanted to challenge myself so I decided to create a slack clone that allows users to send
                and receive messages in real time. This application opens an interactive communication session between
                the user’s browser and the server using web sockets. Slackr was built using: Express, Node, React, Redux,
                Socket IO and MongoDB.
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wmitbrodt/Slackr"><span>Check it out on Github</span></a> <FontAwesome name='long-arrow-right' />
              </h2>
          </div>
        </div>

        <div className="slackr__bg__main">
          <div className="work__main__container">

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>React JS.</li>
                <li>Twitter Bootstrap.</li>
                <li>Font Awesome</li>
                <li>Redux.</li>
                <li>Socket.IO - enables real-time bidirectional event-based communication.</li>
                <li>Express.</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>

          <div id="footer__section">
            <Footer />
          </div>

        </div>
      </div>
    );
  }
}

export default Slackr;
