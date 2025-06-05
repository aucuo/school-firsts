import IMask from 'imask';

document.querySelectorAll('.form-input').forEach(formInput => {
  const editableEl = formInput.querySelector('.form-input__editable');
  const placeholderEl = editableEl.querySelector('label');
  const inputEl = formInput.querySelector('input');
  const spanEl = editableEl.querySelector('span');

  const CONTROL_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Tab'];
  const type = inputEl.getAttribute('type');
  const maxLength = inputEl.getAttribute('maxlength');
  const min = inputEl.getAttribute('min');
  const max = inputEl.getAttribute('max');

  if (inputEl.required) editableEl.dataset.required = '';

  const togglePlaceholder = () => {
    placeholderEl.style.display = spanEl.textContent.trim() ? 'none' : '';
  };

  const setCursorPosition = (el, toEnd = false) => {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(!toEnd);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const handleNumberInput = () => {
    let newText = spanEl.textContent.replace(/[^0-9-]/g, '');
    const minusCount = (newText.match(/-/g) || []).length;

    if (minusCount > 1) {
      newText = '-' + newText.replace(/-/g, '');
    } else if (minusCount === 1 && !newText.startsWith('-')) {
      newText = newText.replace(/-/g, '');
    }

    if (newText !== spanEl.textContent) {
      spanEl.textContent = newText;
      setCursorPosition(spanEl, true);
    }
  };

  const validateNumberRange = () => {
    const text = spanEl.textContent;
    if (text && text !== '-') {
      const numValue = parseInt(text);
      if (min && numValue < parseInt(min)) spanEl.textContent = min;
      if (max && numValue > parseInt(max)) spanEl.textContent = max;
    }
  };

  editableEl.addEventListener('mousedown', e => {
    if (!spanEl.textContent.trim()) {
      e.preventDefault();
      setCursorPosition(spanEl);
    }
  });

  spanEl.addEventListener('input', () => {
    if (maxLength && spanEl.textContent.length > maxLength) {
      spanEl.textContent = spanEl.textContent.slice(0, maxLength);
      setCursorPosition(spanEl, true);
    }

    if (type === 'number') {
      handleNumberInput();
    }

    if (type === 'tel') return;


    inputEl.value = spanEl.textContent;
    placeholderEl && togglePlaceholder();
  });

  spanEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      spanEl.blur();
      return;
    }

    if (maxLength && spanEl.textContent.length >= maxLength && !CONTROL_KEYS.includes(e.key)) {
      e.preventDefault();
    }
  });

  spanEl.addEventListener('blur', () => {

    if (type === 'number') {
      validateNumberRange();
    }

    placeholderEl && togglePlaceholder();
  });

  if (type === 'tel') {
    const imask = new IMask(spanEl, {
      mask: '+7 (000) 000-00-00',
      lazy: false
    });

    imask.on('accept', () => {
      inputEl.value = imask.unmaskedValue;

      inputEl.dataset.valid = `${inputEl.value.length === 10}`;
    });

    imask.value = '';
  }

  placeholderEl && togglePlaceholder();
});