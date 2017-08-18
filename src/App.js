import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'


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
  }
]

const SideNav = () => (
  <Router>
    <div>
      <div>
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
                <a href="mailto:wmitbrodt@gmail.com"><li>Say Hi 👋🏼</li></a>
              </ul>
        </div>

        {/* {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))} */}
      </div>

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
