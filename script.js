const botaoTema = document.querySelector('#toggle-tema');
const body = document.body;

botaoTema.addEventListener('click', function () {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    botaoTema.textContent = '☀️';
  } else {
    botaoTema.textContent = '🌙';
  }
});