import { initProgressBar } from '../features/progressBar/index.js';
import { initMobileMenu } from '../features/mobileMenu/index.js';
import { initModal } from '../features/modal/index.js';
import { initFaq } from '../features/faq/index.js';
import { initQuiz } from '../features/quiz/index.js';

export function initApp($) {
  initProgressBar($);
  initMobileMenu($);
  initModal($);
  initFaq($);
  initQuiz($);
}
