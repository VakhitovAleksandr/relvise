

// function menuScrollTo() {
//     let menu = document.querySelector('.menu');

//     menu.addEventListener('click', function (e) {
//         e.preventDefault()
//         let target = event.target;
//         if (target.tagName != 'A') {
//             return;
//         } else {
//             scrollToId(target.hash);
//             if (menu.classList.contains('active')) {
//                 menu.classList.remove('active')
//             }
//         }
//     });
// }


// function scrollToId(id) {
//     let target = document.querySelector(id);
//     let headerHeight = document.querySelector('.header').offsetHeight;
//     if ('scrollBehavior' in document.body.style) {
//         window.scrollTo({
//             top: target.offsetTop - headerHeight,
//             behavior: 'smooth'
//         });

//     } else {
//         window.scrollTo(0, target.offsetTop)
//     }
// }

// // export default menuScrollTo();
