export function maksPhone($) {
  if (!$().inputmask) {
    console.warn('jQuery Inputmask not loaded');
    return;
  }
  $('input[type="tel"]').inputmask('+7 (999) 999-99-99', {
    showMaskOnFocus: true,
    showMaskOnHover: false,
  });
}
