function toggleMenu(){
    let burger = document.querySelector('.burger');
    let navBlock = document.querySelector('.menu');
    if(burger || navBlock){
        burger.addEventListener('click', ()=>{
            navBlock.classList.toggle('active');
            if(navBlock.classList.contains('active')){
            burger.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            burger.classList.remove('active');
            document.body.style.overflow = '';
        }
        });

    }
}

export default toggleMenu();
