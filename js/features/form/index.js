import { maksPhone } from './maskPhone.js';
import { sanitizeName } from './sanitizeName.js';
import { validateForm } from './validator.js';
import { getFormData } from './collectore.js';
import { sendForm } from './sender.js';
import { addNotification } from './notification.js';

export function initForm($) {
  console.log('initForm');

  maksPhone($);

  // Sanitize name input
  sanitizeName($);

  // Reset errors on input change
  $('input[type="name"]').on('input', function () {
    $(this).closest('label').removeClass('error');
  });

  $('input[type="tel"]').on('input', function () {
    const digits = $(this).val()?.replace(/\D/g, '') || '';
    if (digits.length === 11) {
      $(this).closest('label').removeClass('error');
    }
  });

  $('[data-action="send"]').on('click', function (e) {
    e.preventDefault();

    const $form = $(this).closest('.form-action');

    // Clear previous errors
    $form.find('label.error').removeClass('error');

    if (validateForm($, $form)) {
      const formData = getFormData($, $form);

      sendForm($, $form, formData)
        .then(() => {
          closePopup();
          setTimeout(() => openPopup('modal-success'), 301);
          if (window.yaCounter105401353) {
            yaCounter105401353.reachGoal('zayavka');
          }
          clearForm($form);
        })
        .catch(() => {
          closePopup();
          addNotification('Ошибка отправки');
        });
    }
  });
}
