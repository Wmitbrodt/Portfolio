import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SlideNav from './components/SlideNav';
import ProfessorTripp from './components/work/ProfessorTripp';



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
    exact: true,
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
  },
  { path: '/work/professor-tripp',
    exact: true,
    sidebar: () => <div>Professor Tripp</div>,
    main: ProfessorTripp
  }
]


const SideNav = () => (
  <Router>
    <div>
      <SlideNav />

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
