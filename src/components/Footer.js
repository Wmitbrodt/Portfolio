import React, { Component } from 'react'
import '../styles/footer.css';
import FontAwesome from 'react-fontawesome';



class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer__container">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wmitbrodt"><FontAwesome name='github' /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/WillMitbrodt"><FontAwesome name='twitter' /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/willmitbrodt/"><FontAwesome name='linkedin' /></a>
        </footer>
      </div>


    );
  }
}

export default Footer;
