function ImageDisplay() {'use strict'; }
ImageDisplay.prototype = {
    imgs: [
        {url: "images/photos/download.webp"},
        {url: "images/photos/download%20(1).webp"},
        {url: "images/photos/download%20(2).webp"},
        {url: "images/photos/download%20(3).webp"},
        {url: "images/photos/download%20(4).webp"},
        {url: "images/photos/download%20(5).webp"},
        {url: "images/photos/download%20(6).webp"},
        {url: "images/photos/download%20(7).webp"},
        {url: "images/photos/download%20(8).webp"},
        {url: "images/photos/download%20(9).webp"},
        {url: "images/photos/download%20(10).webp"},
        {url: "images/photos/download%20(11).webp"},
        {url: "images/photos/download%20(12).webp"},
        {url: "images/photos/download%20(13).webp"},
        {url: "images/photos/download%20(14).webp"},
        {url: "images/photos/download%20(15).webp"},
        {url: "images/photos/download%20(16).webp"},
        {url: "images/photos/download%20(18).webp"},
        {url: "images/photos/download.webp"},
        {url: "images/photos/download%20(1).webp"},
        {url: "images/photos/download%20(2).webp"},
        {url: "images/photos/download%20(3).webp"},
        {url: "images/photos/download%20(4).webp"},
        {url: "images/photos/download%20(5).webp"},
        {url: "images/photos/download%20(6).webp"},
        {url: "images/photos/download%20(7).webp"},
        {url: "images/photos/download%20(8).webp"},
        {url: "images/photos/download%20(9).webp"},
        {url: "images/photos/download%20(10).webp"},
        {url: "images/photos/download%20(11).webp"},
        {url: "images/photos/download%20(12).webp"},
        {url: "images/photos/download%20(13).webp"},
        {url: "images/photos/download%20(14).webp"},
        {url: "images/photos/download%20(15).webp"},
        {url: "images/photos/download%20(16).webp"},
        {url: "images/photos/download%20(18).webp"}
    ],
    getImgHtml: function (img) { //Create an HTML element from the stored info on the images
        'use strict';
        var imgHtml = document.createElement('img');
        imgHtml.src = img.url;
        return imgHtml;
    },
    makeImgHoverable: function (imgHtml) {
        'use strict';
        imgHtml.onmouseover = function (e) {
            var currentWidth, currentHeight, newTempWidth, newTempHeight, sideMargin, topMargin;
            console.log(e.target);
            //Get current dimensions
            currentWidth = e.target.offsetWidth;
            currentHeight = e.target.offsetHeight;
            //Calculate new temporary dimensions
            newTempWidth = currentWidth * 1.1;
            newTempHeight = currentHeight * 1.1;
            //Negative margins needed to prevent offset of surrounding elements
            sideMargin = (currentWidth - newTempWidth) / 2;
            topMargin = (currentHeight - newTempHeight) / 2; //top margin
            //Resize target element
            e.target.style.width = newTempWidth.toString() + "px";
            e.target.style.margin = topMargin.toString() + "px " + sideMargin.toString() + "px";
            e.target.style.position = "relative";
            e.target.style.boxShadow = "0px 0px 30px black";
        };
        imgHtml.onmouseout = function (e) {
            //Resize target element
            e.target.style.width = "";
            e.target.style.margin = "";
            e.target.style.position = "";
            e.target.style.boxShadow = "";
        };
    }
};
function GalleryUpdater() {'use strict'; }
GalleryUpdater.prototype = Object.assign(new ImageDisplay(), {
    gallery: null,
    columnBoxes: null,
    /*imgs: [
        {url: "images/photos/download.webp"},
        {url: "images/photos/download%20(1).webp"},
        {url: "images/photos/download%20(2).webp"},
        {url: "images/photos/download%20(3).webp"},
        {url: "images/photos/download%20(4).webp"},
        {url: "images/photos/download%20(5).webp"},
        {url: "images/photos/download%20(6).webp"},
        {url: "images/photos/download%20(7).webp"},
        {url: "images/photos/download%20(8).webp"},
        {url: "images/photos/download%20(9).webp"},
        {url: "images/photos/download%20(10).webp"},
        {url: "images/photos/download%20(11).webp"},
        {url: "images/photos/download%20(12).webp"},
        {url: "images/photos/download%20(13).webp"},
        {url: "images/photos/download%20(14).webp"},
        {url: "images/photos/download%20(15).webp"},
        {url: "images/photos/download%20(16).webp"},
        {url: "images/photos/download%20(18).webp"},
        {url: "images/photos/download.webp"},
        {url: "images/photos/download%20(1).webp"},
        {url: "images/photos/download%20(2).webp"},
        {url: "images/photos/download%20(3).webp"},
        {url: "images/photos/download%20(4).webp"},
        {url: "images/photos/download%20(5).webp"},
        {url: "images/photos/download%20(6).webp"},
        {url: "images/photos/download%20(7).webp"},
        {url: "images/photos/download%20(8).webp"},
        {url: "images/photos/download%20(9).webp"},
        {url: "images/photos/download%20(10).webp"},
        {url: "images/photos/download%20(11).webp"},
        {url: "images/photos/download%20(12).webp"},
        {url: "images/photos/download%20(13).webp"},
        {url: "images/photos/download%20(14).webp"},
        {url: "images/photos/download%20(15).webp"},
        {url: "images/photos/download%20(16).webp"},
        {url: "images/photos/download%20(18).webp"}
    ],*/
    init: function () { //initialize this object
        'use strict';
        this.gallery = document.getElementsByClassName("gallery")[0];
        this.columnBoxes = this.gallery.getElementsByClassName("column_box");
        this.showMoreInit(this);
    },
    columnWithSpace: function () { //Return shortest column with space for more content. Returns -1 if all columns are full
        'use strict';
        var i, iShortest = -1;
        for (i = 0; i < this.columnBoxes.length; i += 1) {
            if (parseFloat(this.columnBoxes[i].dataset.predictedHeight) < this.gallery.offsetHeight) { //There is room for things to be added to the column
                if (iShortest < 0 || this.columnBoxes[iShortest].offsetHeight > this.columnBoxes[i].offsetHeight) { //This column is the shortest column so far
                    iShortest = i;
                }
            }
        }
        return iShortest;
    },
    update: function () { //Place images in the columns
        'use strict';
        this.resetPredictedHeights();
        var i = 0, currentColumnI, img;
        while (this.columnWithSpace() !== -1 && i < this.imgs.length) { //As long as columns have space and there are more images to show
            if (!this.imgs[i].displayed) { //If the image hasn't already been appended to the HTML and shown to the user
                currentColumnI = this.columnWithSpace(); //Store index of column that has space
                img = this.getImgHtml(this.imgs[i]);
                this.makeImgHoverable(img);
                this.columnBoxes[currentColumnI].appendChild(img);
                this.imgs[i].displayed = true;
                if (this.imgs[i].aspectRatio === undefined) {
                    this.columnBoxes[currentColumnI].dataset.predictedHeight = parseFloat(this.columnBoxes[currentColumnI].dataset.predictedHeight) + this.columnBoxes[currentColumnI].offsetWidth / 3;
                } else {
                    this.columnBoxes[currentColumnI].dataset.predictedHeight = parseFloat(this.columnBoxes[currentColumnI].dataset.predictedHeight) + this.columnBoxes[currentColumnI].offsetWidth * this.imgs[i].aspectRatio;
                }
            }
            i += 1;
        }
    },
    linkToSlideshow: function (slideshow) {
        'use strict';
        var i, j, current, linker = {onClickFunction: {}};
        linker.onClickFunction = function (e) {
            console.log(this);
            console.log(slideshow);
            slideshow.start(e);
        };
        console.log(linker);
        for (i = 0; i < this.columnBoxes.length; i += 1) {
            for (j = 0; j < this.columnBoxes[i].childNodes.length; j += 1) {
                this.columnBoxes[i].childNodes[j].onclick = (linker.onClickFunction);
            }
        }
    },
    resetPredictedHeights: function () { //Correct the estimated height to the true height based on what content has loaded at the current time. Will be inaccurate when more content loads.
        'use strict';
        var i;
        for (i = 0; i < this.columnBoxes.length; i += 1) {
            this.columnBoxes[i].dataset.predictedHeight = this.columnBoxes[i].offsetHeight;
        }
    },
    isShowingAllContent: function () {
        'use strict';
        console.log(this.imgs);
        var i;
        for (i = 0; i < this.imgs.length; i += 1) {
            if (!this.imgs[i].displayed) {
                return false;
            }
        }
        return true;
    },
    showMoreInit: function (galleryUpdater) {
        'use strict';
        var i, showMore;
        showMore = this.gallery.getElementsByClassName("show_more")[0];
        showMore.onclick = function (event) {
            var gallery = event.target.parentElement;
            if (gallery.style.height) {
                gallery.style.height = parseInt(gallery.style.height, 10) + 50 + "vh";
            } else {
                gallery.style.height = "150vh";
            }
            galleryUpdater.update();
            if (galleryUpdater.isShowingAllContent()) {
                event.target.style.display = "none";
            }
        };
    }
});

var galleryUpdater = new GalleryUpdater();

function Slideshow() {'use strict'; }
Slideshow.prototype = Object.assign(new ImageDisplay(), {
    imgIndex: null,
    containerElement: document.createElement('div'),
    leftArrow: document.createElement('div'),
    rightArrow: document.createElement('div'),
    exitButton: document.createElement('div'),
    leftImage: document.createElement('img'),
    currentImage: document.createElement('img'),
    rightImage: document.createElement('img'),
    start: function (e) {
        'use strict';
        var src, i, thisObj;
        //Figure out where we are in the images list based on src attribute of clicked element
        src = e.target.src;
        console.log(src);
        for (i = 0; i < this.imgs.length; i += 1) {
            console.log(this.imgs[i].url);
            if (src.includes(this.imgs[i].url)) {
                this.imgIndex = i;
                break;
            }
        }
        console.log(this.imgIndex);
        //Add class to identify container
        this.containerElement.classList.add('gallery_slideshow');
        //Tag arrows for CSS
        this.leftArrow.classList.add('left_arrow');
        this.rightArrow.classList.add('right_arrow');
        this.exitButton.classList.add('exit_button');
        //Make buttons clickable
        thisObj = this;
        this.leftArrow.onclick = function () { thisObj.moveLeft(thisObj); };
        this.rightArrow.onclick = function () { thisObj.moveRight(thisObj); };
        this.exitButton.onclick = function () { thisObj.exit(); };
        //Add navigation to container
        this.containerElement.appendChild(this.leftArrow);
        this.containerElement.appendChild(this.rightArrow);
        this.containerElement.appendChild(this.exitButton);
        //Get the images
        if (this.imgIndex > 0 && this.imgs.length > 1) { //There is an image to the left
            this.leftImage = this.getImgHtml(this.imgs[this.imgIndex - 1]);
        }
        if (this.imgIndex < this.imgs.length - 1) { //There is an image to the right
            this.rightImage = this.getImgHtml(this.imgs[this.imgIndex + 1]);
        }
        this.currentImage = this.getImgHtml(this.imgs[this.imgIndex]);
        //Add images to container
        this.containerElement.appendChild(this.leftImage);
        this.containerElement.appendChild(this.currentImage);
        this.containerElement.appendChild(this.rightImage);
        //Tag images for CSS
        this.updateImgClassList();
        //Make arrows appear
        this.updateArrows();
        //Make the slideshow appear
        document.getElementsByClassName('gallery')[0].appendChild(this.containerElement);
    },
    updateArrows: function () { //Make left and right arrows appear and disappear as needed
        'use strict';
        console.log(this.imgIndex);
        if (this.imgIndex > 0 && this.imgs.length > 1) { //There is an image to the left
            this.leftArrow.classList.add('active');
        } else {
            this.leftArrow.classList.remove('active');
        }
        if (this.imgIndex < this.imgs.length - 1) { //There is an image to the right
            this.rightArrow.classList.add('active');
        } else {
            this.rightArrow.classList.remove('active');
        }
    },
    /*moveLeft: function () {
        'use strict';
        this.imgIndex -= 1;
        this.rightImage = this.currentImage;
        this.currentImage = this.leftImage;
        if (this.imgIndex > 0 && this.imgs.length > 1) { //There is an image to the left
            this.leftImage = this.imgs[this.imgIndex - 1];
        } else {
            this.leftImage = null;
        }
        this.updateImgClassList();
        this.updateImgs();
    },*/
    moveRight: function (thisObj) {
        'use strict';
        thisObj.imgIndex += 1;
        thisObj.containerElement.removeChild(thisObj.leftImage);
        thisObj.leftImage = thisObj.currentImage;
        thisObj.currentImage = thisObj.rightImage;
        if (thisObj.imgIndex < thisObj.imgs.length - 1) { //There is an image to the right
            thisObj.rightImage = thisObj.getImgHtml(thisObj.imgs[thisObj.imgIndex + 1]);
        } else {
            thisObj.rightImage = thisObj.getImgHtml(thisObj.imgs[0]);
        }
        thisObj.containerElement.appendChild(thisObj.rightImage);
        thisObj.updateImgClassList();
        thisObj.updateArrows();
    },
    moveLeft: function (thisObj) {
        'use strict';
        thisObj.imgIndex -= 1;
        thisObj.containerElement.removeChild(thisObj.rightImage);
        thisObj.rightImage = thisObj.currentImage;
        thisObj.currentImage = thisObj.leftImage;
        if (thisObj.imgIndex > 0) { //There is an image to the left
            thisObj.leftImage = thisObj.getImgHtml(thisObj.imgs[thisObj.imgIndex - 1]);
        } else {
            thisObj.leftImage = thisObj.getImgHtml(thisObj.imgs[0]);
        }
        thisObj.containerElement.appendChild(thisObj.leftImage);
        thisObj.updateImgClassList();
        thisObj.updateArrows();
    },
    updateImgClassList: function () {
        'use strict';
        //Add the correct classes
        this.leftImage.classList.add('left_image');
        this.rightImage.classList.add('right_image');
        this.currentImage.classList.add('current_image');
        //Remove any classes that may still exist in the wrong places
        this.leftImage.classList.remove('current_image'); //Remove current/left confusion
        this.currentImage.classList.remove('left_image');
        this.rightImage.classList.remove('current_image'); //Remove current/right confusion
        this.currentImage.classList.remove('right_image');
    },
    exit: function () {
        'use strict';
        document.getElementsByClassName('gallery')[0].removeChild(this.containerElement);
        this.containerElement.removeChild(this.leftImage);
        this.containerElement.removeChild(this.currentImage);
        this.containerElement.removeChild(this.rightImage);
    }
});
var slideshow = new Slideshow();

document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    galleryUpdater.init();
    galleryUpdater.update();
    galleryUpdater.linkToSlideshow(slideshow);
});