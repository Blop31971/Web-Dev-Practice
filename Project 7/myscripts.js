
var imgArray = new Array(
    'image1Lg.jpg',
    'image2Lg.jpg',
    'image3Lg.jpg',
    'image4Lg.jpg',
);


var titleArray = new Array(
    'Quail',
    'Swan',
    'Pelican',
    'Pigeon',
);
    
var imgPath = "Images/Large Images";

function swapImage(imgID) {

    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    var newImg;
    var textTitle;

    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;

    textTitle=titleArray[imgID];

          textDiv.innerHTML = textTitle;
}
    
function preloadImages() {		
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image;
        tmpImg.src = imgPath + imgArray[i];
    }
}