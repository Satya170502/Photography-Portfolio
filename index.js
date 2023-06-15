let carouselEl = document.getElementById("carouselEl");
let GalleryEl = document.getElementById("GalleryEl");
let cbtn = document.getElementById("cbtn");
let gbtn = document.getElementById("gbtn");

cbtn.onclick = function(){
    cbtn.classList.add("btn-primary","bold");
    gbtn.classList.remove("btn-primary","bold");
    carouselEl.classList.remove("d-none");
    GalleryEl.classList.add("d-none");
}
gbtn.onclick = function(){
    cbtn.classList.remove("btn-primary","bold");
    gbtn.classList.add("btn-primary","bold");
    carouselEl.classList.add("d-none");
    GalleryEl.classList.remove("d-none");
}