export function shakeElement(element) {
  if (!element.length) return;
  element.addClass('shake');
  setTimeout(() => element.removeClass('shake'), 500);
}
