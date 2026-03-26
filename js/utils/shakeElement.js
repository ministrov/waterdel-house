export function shakeElement(element) {
  element.addClass('shake');
  setTimeout(() => element.removeClass('shake'), 500);
}
