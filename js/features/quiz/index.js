import { validateStep } from './validator.js';
import { shakeElement } from '../../utils/shakeElement.js';
// import { sendQuizForm } from '../../utils/ajax';
// import { collectQuizAnswers } from '../../utils/collectyQuizAnswers';

export function initQuiz($) {
  const $quiz = $('.quiz');
  if (!$quiz.length) return;

  const $form = $quiz.find('.quiz-form');
  const $rows = $form.find('.quiz-form__row');
  const $titles = $quiz.find('.quiz__titles-text');
  let currentStep = 0;
  const totalSteps = $rows.length;

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

  $form.on('click', '.quiz-form__button-send[type="submit"]', function (e) {
    e.preventDefault();
    console.log('send');
    console.log(e.target);

    const $finalRow = $form.find('.quiz-form__row--final');
    const $phoneInput = $finalRow.find('input[name="phone"]');
    const $acceptInput = $finalRow.find('.acceptance__checkbox');

    console.log($phoneInput);

    // Validate phone input
    const phoneValue = $phoneInput.val()?.replace(/\D/g, '') || '';

    console.log(phoneValue);

    if (phoneValue.length < 10) {
      shakeElement($phoneInput.closest('label'));
      return;
    }

    // Validate acceptance
    const $acceptLabel = $finalRow.find('.quiz-form__acceptence');
    if (!$acceptInput.is(':checked')) {
      $acceptLabel.addClass('error');
      shakeElement($acceptLabel);
      return;
    }
  });

  renderActiveStep();
}
