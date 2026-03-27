export function sendForm($, $form, formData) {
  return new Promise((resolve) => {
    $.ajax({
      url: wd_ajax_object.ajax_url,
      type: 'POST',
      data: {
        action: 'maybeSendForm',
        nonce: wd_ajax_object.nonce,
        form_data: formData,
        page_url: window.location.href.split('#')[0],
      },
      success(response) {
        if (response.success === true) {
          resolve(response);
        } else {
          reject(response);
        }
      },
      error(xhr, status, err) {
        console.error('AJAX Error:', err, status, xhr);
        reject({ message: 'Network error' });
      },
    });
  });
}
