/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { Route, Router } from '@solidjs/router';
import App from './App';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import About from './pages/About'

render(() => {
  return (
    <div class="index">
      <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:project" component={Project} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}, document.getElementById('root') as HTMLElement);
