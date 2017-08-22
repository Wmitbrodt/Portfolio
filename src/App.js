import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SlideNav from './components/SlideNav';


// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: Home
  },
  { path: '/about',
    sidebar: () => <div>about</div>,
    main: About
  },
  { path: '/work',
    sidebar: () => <div>work</div>,
    main: Work
  },
  { path: '/projects',
    sidebar: () => <div>projects</div>,
    main: Projects
  },
  { path: '/contact',
    sidebar: () => <div>contact</div>,
    main: Contact
  }
]


const SideNav = () => (
  <Router>
    <div>
      {/* <div id="nav">
        <div id="menuToggle">
          <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
              <ul id="menu">
                <Link to="/"><li>Home</li></Link>
                <Link to="about"><li>About Me</li></Link>
                <Link to="/work"><li>My Work</li></Link>
                <Link to="/projects"><li>Some Projects</li></Link>
                <Link to="/contact"><li>Say Hi 👋🏼</li></Link>
              </ul>
        </div>
      </div> */}
      <SlideNav

      />

      <div>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default SideNav
