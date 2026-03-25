export function initFaq($) {
  $('.faq__question-top').on('click', function () {
    const $this = $(this);

    if ($this.hasClass('open')) {
      $this.removeClass('open');
      $this.next().slideUp(300);
    } else {
      $('.faq__question-top').removeClass('open');
      $('.faq__question-answer').slideUp(300);
      $this.addClass('open');
      $this.next().slideDown(300);
    }
  });
}
