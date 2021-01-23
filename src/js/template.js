import template from '../template/dishes.hbs';
import dishes from '../menu.json';

const markup = template(dishes);
const menuRef = document.querySelector('.menu');
menuRef.insertAdjacentHTML('beforeend', markup);
