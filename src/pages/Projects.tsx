import { For } from 'solid-js';
import Card, { CardProps } from '../components/Card';
import './Projects.css';

const cards = [
  {
    title: 'Mauth',
    description: 'A modern 2FA app',
    img: 'shrek.jpg',
    url: 'https://github.com/X1nto/Mauth',
  },
  {
    title: 'OpenCord',
    description: 'An open-source Discord Android client',
    img: 'shrek.jpg',
    url: 'https://github.com/MateriApps/OpenCord',
  },
  {
    title: 'Taxi',
    description: 'A simple navigator for Jetpack Compose',
    img: 'shrek.jpg',
    url: 'https://github.com/X1nto/Taxi',
  },
];

export default function Projects() {
  return (
    <div class="projects">
      <div class="projects-header">
        <h1>My projects</h1>
      </div>
      <div class="projects-container">
        <For each={cards}>
          {(card) => {
            return (
              <Card
                title={card.title}
                description={card.description}
                img={card.img}
                url={card.url}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
}
