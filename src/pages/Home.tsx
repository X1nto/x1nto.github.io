import { createSignal, For, Match, Switch } from 'solid-js';
import style from './Home.module.css';

interface SocialMedia {
  label: string;
  username: string;
  url?: string;
}

const socialMedia: SocialMedia[] = [
  {
    label: 'Discord',
    username: '@xinto',
  },
  {
    label: 'GitHub',
    username: 'X1nto',
    url: 'https://github.com/X1nto',
  },
  {
    label: 'Telegram',
    username: '@X1nto',
    url: 'https://t.me/X1nto',
  },
  {
    label: 'Twitter',
    username: '@X1nto',
    url: 'https://twitter.com/X1nto',
  },
];

export default function Home() {
  const [xintoing, setXintoing] = createSignal(false);
  return (
    <div class={style.home}>
      <div class={style['home-container']}>
        <div class={style.xinto}>
          <Switch>
            <Match when={xintoing()}>
              <video
                autoplay
                onended={() => setXintoing(false)}
                src="xinto.mp4"
              />
            </Match>
            <Match when={!xintoing()}>
              <img src="xinto.jpeg" alt="Xinto's profile picture" onclick={() => setXintoing(true)} />
            </Match>
          </Switch>
        </div>
        <div class={style['home-info']}>
          <h1>Hi, I'm Xinto</h1>
          <p>
            I'm a software engineer from Georgia (country) who loves everything
            Kotlin and Android. You can find me on various social media:
          </p>
          <ul class={style['home-info-media']}>
            <For each={socialMedia}>
              {(media) => {
                return (
                  <li>
                    <Switch>
                      <Match when={media.url}>
                        {media.label}: <a href={media.url}>{media.username}</a>
                      </Match>
                      <Match when={true}>
                        {media.label}: {media.username}
                      </Match>
                    </Switch>
                  </li>
                );
              }}
            </For>
          </ul>
        </div>
      </div>
    </div>
  );
}
