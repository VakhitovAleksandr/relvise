export function toggleMenu() {
    let burger = document.querySelector('.burger');
    let menuTop = document.querySelector('.menu');

    burger.addEventListener('click', function () {
        if (!menuTop.classList.contains('active')) {
            showMenu();
            menuTop.addEventListener('click', menuClickHandler);

        } else {
            hideMenu();
        }
    });

    function menuClickHandler() {
        if (!event.target.tagName == 'A') {
            return;
        } else {
            hideMenu();
        }
    }

    function showMenu() {
        menuTop.classList.add('active');
        burger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideMenu() {
        menuTop.classList.remove('active');
        burger.classList.remove('active');
        document.body.style.overflow = '';
    }
}
