export function initProgressBar($) {
  const $progressBar = $('.progressbar');
  let windowHeight = $(document).height() - $(window).height();
  let isActive = false;

  function updateProgressBar() {
    if (!isActive) return;
    const windowScroll = $(window).scrollTop();
    const width = Math.max(0, Math.min(1, windowScroll / windowHeight));
    $progressBar.css('transform', `scaleX(${width})`);
  }

  function checkViewportAndUpdate() {
    const viewportWidth = $(window).width();
    const shouldBeActive = viewportWidth > 1248;

    if (shouldBeActive !== isActive) {
      isActive = shouldBeActive;

      if (isActive) {
        // Recalculate window height when activating
        windowHeight = $(document).height() - $(window).height();
        updateProgressBar();
        // Start listening to scroll events
        $(window).on('scroll', updateProgressBar);
      } else {
        // Reset progress bar when deactivating
        $progressBar.css('transform', 'scaleX(0)');
        // Stop listening to scroll events
        $(window).off('scroll', updateProgressBar);
      }
    } else if (isActive) {
      // If already active, just update
      windowHeight = $(document).height() - $(window).height();
      updateProgressBar();
    }
  }

  // Initial check
  checkViewportAndUpdate();

  // Recalculate on resize
  $(window).on('resize', () => {
    checkViewportAndUpdate();
  });
}
