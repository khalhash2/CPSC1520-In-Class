2)//declare my event handler
function showImage(evt) {
    //a)get a refrence to <img class="feature"> element
    var imgElement= document.querySelector('img.feature');
    //b) remove the hidden class from the element
    imgElement.classList.remove('hidden');
    //
    var imgSrc = linkElement.href;
    imgElement.src=imgSrc;
    imgElement.alt = linkElement.title;
    var captionParagrapgh = document.querySelector('p.feature.title');
    captionParagrapgh.innerHTML = linkElement.title;
    evt.preventDefault();
}