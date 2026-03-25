export function initProgressBar($) {
  const $progressBar = $('.progressbar');
  let windowHeight = $(document).height() - $(window).height();

  function updateProgressBar() {
    const windowScroll = $(window).scrollTop();
    const width = Math.max(0, Math.min(1, windowScroll / windowHeight));
    $progressBar.css('transform', `scaleX(${width})`);
  }

  updateProgressBar(); // Initial position
  $(window).on('scroll', updateProgressBar);

  // Recalculate on resize

  $(window).on('resize', () => {
    windowHeight = $(document).height() - $(window).height();
    updateProgressBar();
  });
}
