import './Card.css';

export interface CardProps {
  title: string;
  description: string;
  img: string;
  url: string;
}

export default function Card(props: CardProps) {
  return (
    <a href={props.url} class="card">
      <img class="card-img" src={props.img} />
      <div class="card-info-container">
        <h3>{props.title}</h3>
        <p class="card-info-description">{props.description}</p>
      </div>
    </a>
  );
}
