function fixHeaderScrolling() {
    let header = document.querySelector('.header');
    let headerH = header.offsetHeight;

    window.addEventListener('scroll', handler);

    function handler() {
        if (window.pageYOffset >= headerH) {
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






export default fixHeaderScrolling();


/*
loop
-

event
-scroll

stack
-handler

*/
