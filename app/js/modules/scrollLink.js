
function scrollLink(){
    let menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener('click', function(e){
            e.preventDefault();
            let target = document.querySelector(this.hash);
            console.log(target)
            if(target){
                window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth",
            });
            }

        });
    });
}


export default scrollLink();
