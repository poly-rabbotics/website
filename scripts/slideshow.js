/*global functions*/
/*eslint no-use-before-define: [1, 'nofunc'] */

document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    
    
    
    functions.slideshow = (function () {
        function Slideshow(images) {
            this.images = images;
            this.count = 0;
            this.next = function (self) {
                /*console.log("next");
                console.log(self.count);
                console.log(self.images[self.count].style);
                console.log(self.images[self.count].style.opacity);*/
                self.images[self.count].style.opacity = 0;
                self.increment();
                self.images[self.count].style.opacity = 1;
            };
            console.log(this.count);
        }
        Slideshow.prototype.increment = function () {
            this.count += 1;
            if (this.count === this.images.length) {
                this.count = 0;
            }
            return this.count;
        };
        
        function init() {
            var i, slideshows = [], image_groups = document.getElementsByClassName('pictures');
            for (i = 0; i < image_groups.length; i += 1) {
                slideshows.push(new Slideshow(image_groups[i].getElementsByTagName('img')));
               // slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();slideshows[i].next();
                setInterval(slideshows[i].next, 5000, slideshows[i]);
            }
        }
        init();
    }());
});