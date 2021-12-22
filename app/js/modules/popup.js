function visiblePopup(){
    let popup = document.querySelector('.popup');
    let eventPopup = document.querySelectorAll('.btn-popup');
    let popupClose = document.querySelector('.popup__close');

    eventPopup.forEach(element => {
        element.addEventListener('click', (e)=>{
            e.preventDefault();
            popup.classList.add('visible');
            if(popup.classList.contains('visible')){
                document.body.style.overflow = 'hidden';
                popupClose.addEventListener('click', ()=>{
                    popup.classList.remove('visible');
                    document.body.style.overflow = '';
                });
            } else {
                document.body.style.overflow = '';
            }
        });

    });
}

export default visiblePopup();
