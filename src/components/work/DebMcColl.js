import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/work-show.css';
import '../../styles/deb-mccoll.css';
import FontAwesome from 'react-fontawesome';

class DebMcColl extends Component {
  render() {
    return (
      <div>
        <div className="deb__bg__image">
          <div className="work__show__container">
            <h1>Deborah McColl</h1>
            <h2>Visual Artist</h2>
          </div>
        </div>
        <div className="deb__bg__main">
          <div className="work__main__container">

            <div className="box-1">
              <h1><span>About</span></h1>
            </div>

            <div className="box-2">
              <h2>
                  Bitters viral kogi meggings. Kinfolk live-edge everyday carry deep v vexillologist small batch. Tattooed shoreditch cray helvetica yuccie. Craft beer man bun adaptogen meditation four dollar toast listicle raclette freegan cold-pressed chambray chartreuse dreamcatcher direct trade photo booth. Pitchfork hexagon hammock vexillologist art party hot chicken flexitarian etsy jean shorts seitan.
              </h2>
            </div>

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>

            <div className="box-4">
              <ul>
                <li>Ruby on Rails - server-side web application framework written in Ruby under the MIT License.</li>
                <li>Twitter Bootstrap - the most popular front-end framework.</li>
                <li>Font Awesome - The iconic font and CSS toolkit</li>
                <li>SendGrid - Delivering your transactional and marketing email through one reliable platform.</li>
                <li>jQuery - javascript library.</li>
                <li>postgresql -PostgreSQL is an advanced object-relational database management system.</li>
              </ul>
            </div>
    
          </div>
        </div>
      </div>
    );
  }
}

export default DebMcColl;
