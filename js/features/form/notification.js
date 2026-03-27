let notificationCounter = 0;

export function addNotification(message, type = 'info') {
  console.log(message, type);
  const $container = $('#form-notifications');

  if (!$container.length) {
    console.warn('Notification container #form-notifications not found');
    return;
  }

  notificationCounter++;

  const notificationId =
    'notification-' + Date.now() + '-' + notificationCounter;

  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
      d="M14.5 12 9.2 2.7a1.3 1.3 0 0 0-2.4 0L1.5 12a1.3 1.3 0 0 0 1.2 2h10.6a1.3 1.3 0 0 0 1.2-2ZM8 6v2.7M8 11.3h0"/>
  </svg>`;

  const svgClose = `
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none">
      <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M7.1.6.6 7.1M.6.6l6.5 6.5"/>
    </svg>`;

  const $notification =
    $(`<div class="notification notification-${type}" id="${notificationId}">
      <div class="notification-icon">${svgIcon}</div>
      <div class="notification-message">${message}</div>
      <button class="close-notification" aria-label="Close notification">${svgClose}</button>
    </div>`);

  $container.append($notification);

  // Auto-show after insert

  setTimeout(() => $notification.addClass('show'), 10);

  // Auto-close after 10s
  const autoCloseTimeout = setTimeout(() => {
    removeNotification(notificationId);
  }, 10000);

  $notification.data('autoCloseTimeout', autoCloseTimeout);
}

export function removeNotification(notificationId) {
  const $notification = $('#' + notificationId);
  if (!$notification.length) return;

  const timeout = $notification.data('autoCloseTimeout');
  if (timeout) clearTimeout(timeout);

  $notification.removeClass('show');

  // Remove from DOM after animation
  setTimeout(() => $notification.remove(), 300);
}

// Click outside or on notification → close
$(document).on('click', '.notification', function () {
  const notificationId = $(this).attr('id');
  if (notificationId) {
    removeNotification(notificationId);
  }
});
