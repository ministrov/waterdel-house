export function getFormData($, $form) {
  console.log($, $form);
  const formDate = {};

  $form.find('input').each(function () {
    const $input = $(this);
    const name = $input.attr('name');
    if (name) {
      formDate[name] = $input.val();
    }
  });

  console.log(formDate);

  return formDate;
}
