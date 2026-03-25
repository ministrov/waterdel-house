// js/main.js

import $ from './libs/jquery-wrapper.js';
import { initApp } from './app/init.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS.js

  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
  });

  // Start app and pass $ to modules

  initApp($);

  if (typeof window.jQuery === 'function') {
    console.log('✅ jQuery version:', $.fn.jquery);
  } else {
    console.error('❌ jQuery is NOT loaded! Check script order.');
  }
});
