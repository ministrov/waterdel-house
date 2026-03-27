export function sanitizeName($) {
  $('input[name="name"]').on('change', function () {
    this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  });
}
