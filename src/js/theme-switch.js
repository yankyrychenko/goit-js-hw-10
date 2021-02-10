const bodyRef = document.querySelector('body');
const toogleRef = document.querySelector('#theme-switch-toggle');

toogleRef.addEventListener('change', themeSwitch);

const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};

function themeSwitch(e) {
  e.target.checked
    ? (bodyRef.classList.add(theme.dark),
      bodyRef.classList.remove(theme.light),
      localStorage.setItem('theme', theme.dark))
    : (bodyRef.classList.add(theme.light),
      bodyRef.classList.remove(theme.dark),
      localStorage.setItem('theme', theme.light));
}

if (localStorage.getItem('theme') === theme.dark) {
  toogleRef.checked = true;
  bodyRef.classList.add(theme.dark);
}
