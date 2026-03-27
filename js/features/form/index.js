import { maksPhone } from './maskPhone.js';
import { sanitizeName } from './sanitizeName.js';
// import { validateForm } from './validator.js';
// import { getFormData } from './collectore.js';
// import { sendForm } from './sender.js';
// import { addNotifications } from './notification.js';

export function initForm($) {
  console.log('initForm');

  maksPhone($);

  // Sanitize name input
  sanitizeName($);
}
