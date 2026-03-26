// import { validateStep } from './validator';
// import { sendQuizForm } from '../../utils/ajax';
// import { collectQuizAnswers } from '../../utils/collectyQuizAnswers';
// import { shakeElement } from '../../utils/shakeElement';

export function initQuiz($) {
  const $quiz = $('.quiz');
  if (!$quiz.length) return;

  const $form = $quiz.find('.quiz-form');
  const $rows = $form.find('.quiz-form__row');
  const $titles = $quiz.find('.quiz__titles-text');
  let currentStep = 0;
  const totalSteps = $rows.length;

  console.log($titles, currentStep, totalSteps);

  // Render active step feild

  function renderActiveStep() {
    $rows.removeClass('active');
    $rows.eq(2).addClass('active');
    updateTitles(0);
  }

  function updateTitles(stepIndex) {
    $titles.removeClass('active');

    if (stepIndex < $titles.length) {
      $titles.eq(stepIndex).addClass('active');
    }
  }

  renderActiveStep();
}
