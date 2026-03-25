// js/features/mobileMenu/index.js

export function initMobileMenu() {
  const $burger = $('#mobile-menu-burger');
  const $menu = $('.header__mobile-menu');

  $burger.on('click', () => {
    $(this).toggleClass('active');
    $menu.toggleClass('active');
  });

  function closeMobileMenu() {
    $burger.removeClass('active');
    $menu.removeClass('active');
  }

  // Close menu clicking a button

  $('.mobile-menu__close').on('click', closeMobileMenu);

  // Close menu on a link clicking

  $('.mobile-menu__link').on('click', closeMobileMenu);

  // Close on outside click
  $(document).on('click', function (e) {
    if (!$.contains($menu[0], e.target) && !$.contains($burger[0], e.target)) {
      closeMobileMenu();
    }
  });
}
