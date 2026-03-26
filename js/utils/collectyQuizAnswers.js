export function collectQuizAnswers($, $rows) {
  const answers = [];

  $rows.not('[data-step="final"]').each(function () {
    const $row = $(this);
    const question = $row.find('.quiz-form__left-title').text().trim();
    const $checked = $row.find('input:checked');
    const values = $checked.map(() => $(this).val()).get();

    if (values.length > 0) {
      answers.push({ question, answers: values });
    }
  });

  // console.log(answers);

  return answers;
}
