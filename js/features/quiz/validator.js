export function validateStep($, stepIndex, $rows) {
  const $currentRow = $rows.eq(stepIndex);
  const $inputs = $currentRow.find(
    'input[type="checkbox"], input[type="radio"]',
  );

  if (!$inputs.length) return true;

  const isChecked = $inputs.filter(':checked').length > 0;

  if (!isChecked) {
    const $right = $currentRow.find('.quiz-form__right');
    $right.addClass('shake');
    setTimeout(() => $right.removeClass('shake'), 500);
    return false;
  }

  return true;
}
