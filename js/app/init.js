// js/app/init.js
import { initProgressBar } from '../features/progressBar/index.js';

export function initApp($) {
  initProgressBar($);
  console.log('initApp');
}

// console.log('Hello, World!');
