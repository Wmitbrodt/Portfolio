import React, { Component } from 'react';
import '../styles/contact.css';
import SlideNav from './SlideNav';
import FooterAlt from './FooterAlt';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom'


class Contact extends Component {
  render() {
    return (
      <div id="contact__container">
        <SlideNav />
        <h1>Let's Chat</h1>

        <div className="contact__hero__container">

          <div className="col-left">
            <h3>
              Please feel free to reach out and get in touch.
              Whether you have a work enquiry or simply want to find out more,
              let’s chat.
            </h3>

            <Link className="hover" target="_blank" to="mailto:wmitbrodt@gmail.com">
                <span className="span__underline hover">Send me an email</span> <span className="arrow-right">→</span>
            </Link>
            <p className="tiny">&#40;click here if you hate filling out forms&#41;</p>
           <br /><br /><br /><br />

          </div>

          <div className="col-right">
            <div>
              <form action="https://formspree.io/wmitbrodt@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Full Name"/>
                <input type="email" name="_replyto" placeholder="Email Address"/>
                <textarea name="message" placeholder="Your message"></textarea>
                <input type="hidden" name="_next" value="http://localhost:3000/" />
                <button className="contact__button" type="submit">Send a message <FontAwesome name='long-arrow-right' /></button>
              </form>
            </div>
          </div>
        </div>
      <FooterAlt />
    </div>
    );
  }
}



export default Contact;
