var Next = document.getElementById("forwardBtn");
var Previous = document.getElementById("backwardBtn");
var slider_img = document.querySelector('.slider-img');
var images = ['flowers1.jpg', 'flowers2.jpg', 'flowers3.jpg', 'flowers4.jpg', 'flowers5.jpg'];
var i = 0;

function prev(){
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if(i >= images.length-1) i = -1;
    i++
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', "images/"+images[i]);
}


Next.addEventListener("click", next);

Previous.addEventListener("click", prev);