import getScrollBarWidth from '../../utils/getScrollBarWidth.js';

export function initModal($) {
  window.openPopup = function (popupId) {
    $('#' + popupId).addClass('open');

    const scrollbarWidth = getScrollBarWidth($);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scrollbarWidth}px`;
  };

  window.closePopup = function () {
    $('.popup').removeClass('open');

    setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.marginRight = '';
    }, 300);
  };

  $('[data-modal]').on('click', function (e) {
    e.preventDefault();
    const modalId = $(this).data('modal');
    openPopup(modalId);
  });

  $('.modal__close').on('click', closePopup);

  $('.popup').on('click', function (e) {
    if (e.target === this) {
      closePopup();
    }
  });

  $(document).on('keyup', function (e) {
    if (e.key === 'Escape') closePopup();
  });
}
