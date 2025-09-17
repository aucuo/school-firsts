import './consultation.scss'

const consultationEl = document.querySelector('#consultation');
const applicationEl = document.querySelector('#application');

if (consultationEl) {
  // form
  const form = consultationEl.querySelector('#consultForm');
  const submitBtn = form.querySelector('button[type="submit"]');
  const inputs = form.querySelectorAll('input[required], span[contenteditable]');
  const phoneInput = form.querySelector('#consultPhone');
  const checkbox = form.querySelector('#consultCheckbox');

  // results
  const resultSuccessEl = applicationEl.querySelector('.result.result--success');
  const resultErrorEl = applicationEl.querySelector('.result.result--error');

  const checkValidity = () => {
    const isValid = form.checkValidity() && checkbox.checked && phoneInput && phoneInput.dataset.valid === 'true';
    submitBtn.disabled =  !isValid;

    return isValid;
  };

  inputs.forEach(el => el.addEventListener('input', checkValidity));
  checkbox.addEventListener('change', checkValidity);

  form.querySelectorAll('span[contenteditable]').forEach(el => {
    el.addEventListener('paste', e => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text');
      document.execCommand('insertText', false, text);
      checkValidity();
    });
  });

  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if (!checkValidity()) return;

    const innerEl = applicationEl.querySelector('.application__inner');
    const applicationButton = applicationEl.querySelector('[data-popup-target="application"]');
    innerEl.style.display = 'block';

    applicationButton.click();

    // todo переделать в проде. сейчас для демонстрации ошибки сервера
    if (phoneInput.value === '1111111111') {
      resultErrorEl.style.display = 'flex';
    } else {
      resultSuccessEl.style.display = 'flex';
    }

  });
  checkValidity();
}