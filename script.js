const botaoTema = document.querySelector('#toggle-tema');
const body = document.body;

// Ao carregar a página, aplica o tema guardado (se existir)
const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'claro') {
  body.classList.remove('dark');
  botaoTema.textContent = '🌙';
} else {
  body.classList.add('dark');
  botaoTema.textContent = '☀️';
}

// Ao clicar, alterna o tema e guarda a escolha
botaoTema.addEventListener('click', function () {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    botaoTema.textContent = '☀️';
    localStorage.setItem('tema', 'escuro');
  } else {
    botaoTema.textContent = '🌙';
    localStorage.setItem('tema', 'claro');
  }
});