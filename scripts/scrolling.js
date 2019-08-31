window.onload = function () {
    'use strict';

    var shrinker_size, holder, shrinker, keeper;
    holder = document.getElementsByTagName("header")[0];

    shrinker = holder.getElementsByTagName("h1")[0];
    keeper = holder.getElementsByTagName("nav")[0];
    //keeper.style.width = holder.offsetWidth + "px";
    //keeper.style.position = "sticky";
    keeper.style.top = 0;
    window.onscroll = function () {
        if (window.pageYOffset !== undefined) {
            shrinker_size = 600 / (300 + 3.6 * window.pageYOffset);
            if (shrinker_size < 0.75) {
                shrinker.style.display = "none";
                //keeper.style.position = "fixed";
                keeper.style.top = "0px";
                keeper.style.zIndex = "5";
            } else {
                shrinker.style.display =  "";
                //keeper.style.position = "sticky";
            }
            shrinker.style.fontSize = shrinker_size + "rem";
        }
    };
};