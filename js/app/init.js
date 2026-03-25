import { initProgressBar } from '../features/progressBar/index.js';
import { initMobileMenu } from '../features/mobileMenu/index.js';
import { initModal } from '../features/modal/index.js';

export function initApp($) {
  initProgressBar($);
  initMobileMenu($);
  initModal($);
}
