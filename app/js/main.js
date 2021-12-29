import { headerScroll } from './modules/headerScroll.js';
import { toggleMenu } from './modules/menuMobile.js';
import { menuScrollTo } from './modules/menuScrollTo.js';

document.addEventListener('DOMContentLoaded', () => {
    headerScroll();
    toggleMenu();
    menuScrollTo();
});
