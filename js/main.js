// js/main.js

import $ from './libs/jquery-wrapper';
import { initApp } from './app/init.js';
import { easing } from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS.js

  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
  });

  // Start app and pass $ to modules

  initApp($);
});
