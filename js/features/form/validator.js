import { addNotification } from './notification.js';

export function validateForm($, $form) {
  let isValid = true;

  // Clear all notifications first
  removeAllNotifications();

  // Acceptance checkbox
  const $acceptence = $form.find('input[name="acceptence"]');
  if (!$acceptence.is(':checked')) {
    $acceptence.closest('label').addClass('error');
    addNotification('Необходимо согласие на обработку персональных данных');
    isValid = false;
  }

  // Phone validation
  const $tel = $form.find('input[type="tel"]');
  const telDigits = $tel.val()?.replace(/\D/g, '') || '';
  if (telDigits.length !== 11) {
    $tel.closest('label').addClass('error');
    addNotification('Недопустимый номер телефона');
    isValid = false;
  }
  if ($tel.val().length > 25) {
    $tel.closest('label').addClass('error');
    isValid = false;
  }

  // Name validation (if present)
  const $name = $form.find('input[name="name"]');
  if ($name.length > 0) {
    const nameVal = $name.val().trim();
    if (nameVal === '' || nameVal.length > 50) {
      $name.closest('label').addClass('error');
      addNotification('Недопустимое имя');
      isValid = false;
    }
  }

  return isValid;
}

function removeAllNotifications() {
  const $container = $('#form-notifications');
  if (!$container.length) return;

  $container.find('.notification').each(function () {
    const timeout = $(this).data('autoCloseTimeout');
    if (timeout) clearTimeout(timeout);
  });

  $container.empty();
}
