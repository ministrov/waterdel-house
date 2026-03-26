import { validateStep } from './validator.js';
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

  // console.log($titles, currentStep, totalSteps);
  console.log($rows);

  // Render active step feild

  function renderActiveStep() {
    $rows.removeClass('active');
    $rows.eq(0).addClass('active');
    updateTitles(0);
  }

  function updateTitles(stepIndex) {
    $titles.removeClass('active');

    if (stepIndex < $titles.length) {
      $titles.eq(stepIndex).addClass('active');
    }
  }

  // Go to specific step
  function goToStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= totalSteps) return;

    $rows.eq(currentStep).removeClass('active');
    $rows.eq(stepIndex).addClass('active');

    currentStep = stepIndex;
    updateTitles(stepIndex);
  }

  // Next button
  $form.on('click', '.quiz-form__left-btn[type="button"]', function (e) {
    e.preventDefault();
    if (validateStep($, currentStep, $rows)) {
      goToStep(currentStep + 1);
    }
  });

  // Back button
  $form.on('click', '.quiz-form__button-back', function (e) {
    e.preventDefault();
    goToStep(currentStep - 1);
  });

  // Clear error on accept checkbox change
  $form.on('change', '.quiz-form__field--tel', function () {
    if ($(this).is(':checked')) {
      $(this).parents('.form__acceptence').removeClass('error');
    }
  });

  renderActiveStep();
}
