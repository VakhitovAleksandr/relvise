import findVideos from './modules/video.js'
import toggleMenu from './modules/menu.js'
import visiblePopup from './modules/popup.js'
import menuScrollTo from './modules/menuScrollTo.js'



document.addEventListener('DOMContentLoaded',()=>{
    "use strict";
    toggleMenu();
    visiblePopup();
    findVideos();
    menuScrollTo()
});
