const themeButton = document.querySelector('#theme-toggle');
const body = document.body;

// When the page loads, apply the saved theme (if there is one)
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  body.classList.remove('dark');
  themeButton.textContent = '🌙';
} else {
  body.classList.add('dark');
  themeButton.textContent = '☀️';
}

// On click, toggle the theme and save the choice
themeButton.addEventListener('click', function () {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    themeButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeButton.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});
