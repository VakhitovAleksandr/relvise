function headerFixed() {
    let header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;


    document.addEventListener('scroll', function () {
        let pageOffset = window.pageYOffset;
        if (pageOffset > headerHeight) {

            header.classList.add('t');

            header.addEventListener('transitionend', re);

            function re() {
                header.classList.remove('t');
                header.classList.add('fixed');
            }
        } else {
            header.removeEventListener('transitionend', re);
            header.classList.remove('fixed');
        }

    });
}

export default headerFixed();
