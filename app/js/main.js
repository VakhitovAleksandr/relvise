import findVideos from './modules/video.js'
import toggleMenu from './modules/menu.js'
import visiblePopup from './modules/popup.js'
import scrollLink from './modules/scrollLink.js'



document.addEventListener('DOMContentLoaded',()=>{
    "use strict";
    toggleMenu();
    visiblePopup();
    findVideos();
    scrollLink()
});
