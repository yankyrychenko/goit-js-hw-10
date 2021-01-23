const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};
const bodyRef = document.querySelector('body');
const switcherRef = document.querySelector('#theme-switch-toggle');

const lightTheme = () => {
  bodyRef.classList.remove(theme.dark);
  bodyRef.classList.add(theme.light);
  localStorage.setItem('theme', theme.light);
};

const darkTheme = () => {
  bodyRef.classList.remove(theme.light);
  bodyRef.classList.add(theme.dark);
  localStorage.setItem('theme', theme.dark);
};

const changeTheme = () => {
  switcherRef.checked ? darkTheme() : lightTheme();
};

if (localStorage.getItem('theme') === theme.dark) {
  switcherRef.checked = true;
  bodyRef.classList.add(theme.dark);
}

switcherRef.addEventListener('click', changeTheme);
