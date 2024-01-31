import { Topbar, TopbarLink } from './components/Topbar';
import { RouteSectionProps, useLocation } from '@solidjs/router';
import style from './App.module.css';

export default function App(props: RouteSectionProps) {
  const location = useLocation()
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
    <div class={style.app}>
      <Topbar links={links} selected={location.pathname}/>
      <div class={style.pages}>
          {props.children}
      </div>
    </div>
  );
}
