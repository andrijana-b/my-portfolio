// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

document.getElementById("userJourneyImg").onclick = enlargeImage

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