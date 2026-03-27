export function getFormData($, $form) {
  const formDate = {};

  $form.find('input').each(function () {
    const $input = $(this);
    const name = $input.attr('name');
    if (name) {
      formDate[name] = $input.val();
    }
  });

  return formDate;
}
