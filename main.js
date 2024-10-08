import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { asyncAwaitComponent } from './src/concepts/async-await';
import { callbacksComponent } from './src/concepts/callbacks';
import { asyncAwait2Component } from './src/concepts/async-await-nosec';
import { forAwaitComponent } from './src/concepts/for-await';
import { generatorFunctionsComponent } from './src/concepts/generators';
import { generatorAsyncComponent } from './src/concepts/generators-async';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
   
  </div>
`;

const element = document.querySelector('.card');
//environmentsComponents(element)
//callbacksComponent(element)
//promiseComponent(element)
//promiseRaceComonent(element)
//asyncAwaitComponent(element)
//asyncAwait2Component(element);
//forAwaitComponent(element);
generatorAsyncComponent(element);
