import React, { Component } from 'react'
import '../../styles/work/work-show.css';
import '../../styles/work/my-wardrobe.css';
import FontAwesome from 'react-fontawesome';

class MyWardrobe extends Component {
  render() {
    return (
      <div>
        <div className="wardrobe__bg__image">

          <div className="hero__header">
            <h1>myWardrobe:</h1>
            <h2>WordPress</h2>
          </div>

        </div>
        <div className="work__hero__container">

          <div className="box-1">
            <h1><span>About</span></h1>
          </div>

          <div className="box-2">
            <h2>
                myWardobe makes it quick and easy to trade up your closet for the styles you love. Shop and sell brand name and luxury clothing on the go.. and earn rewards while doing it
                <br />
                <a target="_blank" rel="noopener noreferrer" href="http://mywardrobeonline.org/"><span>See it live</span></a> <FontAwesome name='long-arrow-right' />
              </h2>
          </div>
        </div>

        <div className="wardrobe__bg__main">
          <div className="work__main__container">

            <div className="box-1">
              <h1><span>My Role</span></h1>
            </div>

            <div className="box-2">
              <h2>
                For this project, the vast majority of my job was to transform the existing wire-frames into an interactive front-end.
                Other contributions included setting up the server, creating the blog, and contact form.
              </h2>
            </div>

            <div className="box-3">
              <h1><span>Tech</span></h1>
            </div>
             
            <div className="box-4">
              <ul>
                <li>WordPress - 28% of the web uses WordPress, from hobby blogs to the biggest news sites online.</li>
                <li>jQuery - javascript library.</li>
                <li>MySQL - MySQL Server, the world's most popular open source database, and MySQL Cluster, a real-time, open source transactional database.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MyWardrobe;
