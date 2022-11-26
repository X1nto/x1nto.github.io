import { useParams } from '@solidjs/router';
import { createEffect } from 'solid-js';

export default function Project() {
  const params = useParams();

  createEffect(() => {
    console.log(params['project']);
  });

  return <div></div>;
}
