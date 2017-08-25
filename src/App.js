import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SlideNav from './components/SlideNav';
import NoMatch from './components/NoMatch';
import ProfessorTripp from './components/work/ProfessorTripp';
import HeritageApartments from './components/work/HeritageApartments';
import MyWardrobe from './components/work/MyWardrobe';
import DebMcColl from './components/work/DebMcColl';
import GreenEats from './components/projects/GreenEats';


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
    exact: true,
    sidebar: () => <div>about</div>,
    main: About
  },
  { path: '/work',
    exact: true,
    sidebar: () => <div>work</div>,
    main: Work
  },
  { path: '/projects',
    exact: true,
    sidebar: () => <div>projects</div>,
    main: Projects
  },
  { path: '/contact',
    exact: true,
    sidebar: () => <div>contact</div>,
    main: Contact
  },
  { path: '/work/professor-tripp',
    exact: true,
    sidebar: () => <div>Professor Tripp</div>,
    main: ProfessorTripp
  },
  { path: '/work/heritage-apartments',
    exact: true,
    sidebar: () => <div>Heritage Apartments</div>,
    main: HeritageApartments
  },
  { path: '/work/my-wardrobe',
    exact: true,
    sidebar: () => <div>My Wardrobe</div>,
    main: MyWardrobe
  },
  { path: '/work/deb-mccoll',
    exact: true,
    sidebar: () => <div>Deborah McColl</div>,
    main: DebMcColl
  },
  { path: '/projects/green-eats',
    exact: true,
    sidebar: () => <div>Green Eats</div>,
    main: GreenEats
  }
]


const SideNav = () => (
  <Router>
    <div>
      <SlideNav />
      <div>
        <Switch>
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
          <Route component={NoMatch}/>
        </Switch>


      </div>
    </div>
  </Router>
)

export default SideNav
