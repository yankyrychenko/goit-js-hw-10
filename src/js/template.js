import menu from '../menu.json';
import template from '../template/menu.hbs';

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', template(menu));
