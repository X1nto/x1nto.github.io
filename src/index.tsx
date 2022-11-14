/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Router } from '@solidjs/router';
import { createSignal } from 'solid-js';

render(() => {
  return (
    <div class="index">
      <Router>
        <App />
      </Router>
    </div>
  );
}, document.getElementById('root') as HTMLElement);
