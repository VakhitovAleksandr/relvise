export function headerScroll() {
    let header = document.querySelector('.header');
    window.addEventListener('scroll', handlerScroll);

    function handlerScroll() {

        if (window.pageYOffset >= header.offsetHeight) {
            if (!header.classList.contains('fix')) {
                header.classList.add('tr');
                header.addEventListener('transitionend', hand);
                function hand() {
                    header.classList.remove('tr');
                    header.classList.add('fix');
                    header.removeEventListener('transitionend', hand);
                };
            }
        } else {
            header.classList.remove('fix');
        }
    }
}
