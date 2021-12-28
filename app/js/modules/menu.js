function toggleMenu() {

    let burger = document.querySelector('.burger');
    let menuTop = document.querySelector('.menu');


    menuTop.addEventListener('click', menuScrollTo);
    burger.addEventListener('click', menuBurger);


    function menuScrollTo(e) {
        let target = event.target;
        e.preventDefault();
        if (target.tagName != 'A') {
            return;
        } else {
            scrollToId(target.hash);
            menuTop.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = '';
        }
    };


    function scrollToId(id) {
        let target = document.querySelector(id);
        let headerHeight = document.querySelector('.header').offsetHeight;
        if ('scrollBehavior' in document.body.style) {
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });

        } else {
            window.scrollTo(0, target.offsetTop)
        }
    }


    function menuBurger() {
        menuTop.classList.toggle('active');
        if (menuTop.classList.contains('active')) {
            burger.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            burger.classList.remove('active');
            document.body.style.overflow = '';
        }
    };


}

export default toggleMenu();
