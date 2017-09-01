import React, { Component } from 'react';
import '../styles/contact.css';
import SlideNav from './SlideNav';
import Footer from './Footer';

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

            <a target="_blank" rel="noopener noreferrer" href="mailto:wmitbrodt@gmail.com"><span>Send me an email →</span></a>
            <br /><br /><br /><br />
          </div>

          <div className="col-right">
            <div>
              <form action="https://formspree.io/wmitbrodt@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Full Name"/>
                <input type="email" name="_replyto" placeholder="Email Address"/>
                <textarea name="message" placeholder="Your message"></textarea>
                <input type="hidden" name="_next" value="http://localhost:3000/" />
                <button className="contact__button" type="submit">Send a message →</button>
              </form>
            </div>
          </div>
        </div>
      <Footer />
    </div>
    );
  }
}



export default Contact;
