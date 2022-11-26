import { Component, createMemo, lazy } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import { Topbar, TopbarButton, TopbarLink } from './components/Topbar';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Project = lazy(() => import('./pages/Project'));
const About = lazy(() => import('./pages/About'));

export default function App() {
  const links: TopbarLink[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Projects',
      url: '/projects',
    },
    {
      label: 'About',
      url: '/about',
    },
  ];
  return (
    <div class="app">
      <Topbar links={links} />
      <div class="pages">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/:project" component={Project} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </div>
  );
}
