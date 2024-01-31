import { For } from 'solid-js';
import Card from '../components/Card';
import style from './Projects.module.css';

const cards = [
  {
    title: 'Mauth',
    description: 'A modern 2FA app',
    img: 'shrek.png',
    url: 'https://github.com/X1nto/Mauth',
  },
  {
    title: 'OpenCord',
    description: 'An open-source Discord Android client',
    img: 'shrek.png',
    url: 'https://github.com/MateriApps/OpenCord',
  },
  {
    title: 'Taxi',
    description: 'A simple navigator for Jetpack Compose',
    img: 'shrek.png',
    url: 'https://github.com/X1nto/Taxi',
  },
];

export default function Projects() {
  return (
    <div class={style.projects}>
      <div>
        <h1>My projects</h1>
      </div>
      <div class={style['projects-container']}>
        <For each={cards}>
          {(card) => (
            <Card
              title={card.title}
              description={card.description}
              img={card.img}
              url={card.url}
            />
          )}
        </For>
      </div>
    </div>
  );
}
