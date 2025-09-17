import './process.scss'

const steps = document.querySelectorAll('[data-js-process-step]');

steps.forEach((step) => {
  step.addEventListener('click', function() {
    this.classList.toggle('step--opened');
  })
})

// Находим все кнопки и целевые блоки
const btnFirst = document.querySelectorAll('[data-js-process-toggle-first]');
const btnSecond = document.querySelectorAll('[data-js-process-toggle-second]');

const contentFirst = document.querySelector('[data-js-process-first]');
const contentSecond = document.querySelector('[data-js-process-second]');

// Функция: показать первый, скрыть второй
function showFirst() {
  contentFirst.style.display = '';
  contentSecond.style.display = 'none';

  // Опционально: подсветка активной кнопки
  btnFirst.forEach(btn => btn.classList.add('btn--active'));
  btnSecond.forEach(btn => btn.classList.remove('btn--active'));
}

// Функция: показать второй, скрыть первый
function showSecond() {
  contentFirst.style.display = 'none';
  contentSecond.style.display = '';

  btnFirst.forEach(btn => btn.classList.remove('btn--active'));
  btnSecond.forEach(btn => btn.classList.add('btn--active'));
}

// Назначаем обработчики на все кнопки
btnFirst.forEach(btn => {
  btn.addEventListener('click', showFirst);
});

btnSecond.forEach(btn => {
  btn.addEventListener('click', showSecond);
});

// Опционально: установим начальное состояние (например, первый вариант активен)
showFirst();