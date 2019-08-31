document.onclick = function () {   //Make the navigation bar go away, if it's not gone already
    'use strict';
    var threshold = 10;
    if (parseInt(window.getComputedStyle(document.getElementById('main_nav')).width, 10) > threshold && document.getElementById('main_nav').style.width !== "auto") {
        document.getElementById('main_nav').style.width = '';
        //document.getElementById('main_nav').style.minWidth = '';
    }
};
function openDrawer() {
    'use strict';
    document.getElementById('main_nav').style.width = "260px";
    //console.log(parseInt(window.getComputedStyle(document.getElementById('main_nav')).width, 10));
    //if (parseInt(window.getComputedStyle(document.getElementById('main_nav')).width, 10) < 260) {
    //    document.getElementById('main_nav').style.width = '260px';
    //}
}