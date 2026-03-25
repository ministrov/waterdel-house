// js/app/init.js
import { initProgressBar } from '../features/progressBar/index.js';
import { initMobileMenu } from '../features/mobileMenu/index.js';

export function initApp($) {
  initProgressBar($);
  initMobileMenu($);
  // console.log('initApp');
}

// console.log('Hello, World!');
