// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

document.getElementById("markoImg").onclick = enlargeImage
document.getElementById("anaImg").onclick = enlargeImage
document.getElementById("bojanImg").onclick = enlargeImage
document.getElementById("homePageImg").onclick = enlargeImage
document.getElementById("aboutUsImg").onclick = enlargeImage
document.getElementById("sportsImg").onclick = xlEnlargeImage
document.getElementById("getInvolvedImg").onclick = xlEnlargeImage
document.getElementById("empathyMapImg").onclick = xlEnlargeImage
document.getElementById("userFlowImg").onclick = xlEnlargeImage
document.getElementById("informationArchImg").onclick = xlEnlargeImage

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

function enlargeImage() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

function xlEnlargeImage() {
    modal.style.display = "block";
    modalImg.style.maxWidth = "1500px";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}