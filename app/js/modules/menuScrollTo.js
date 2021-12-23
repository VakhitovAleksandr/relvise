
function menuScrollTo(){
    let menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', linkClicked);
    });
}

function linkClicked(e){
    e.preventDefault();
    scrollToId(this.hash);
}

function scrollToId(id){
    let target = document.querySelector(id);
    if('scrollBehavior' in document.body.style){
        window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
        });
    } else {
        window.scrollTo(0, target.offsetTop)
    }


}

export default menuScrollTo();
