import getScrollBarWidth from '../../utils/getScrollBarWidth.js';

export function initModal($) {
  const scrollBarWidth = getScrollBarWidth($);
  console.log(`initModal: ${$} ${scrollBarWidth}`);
}
