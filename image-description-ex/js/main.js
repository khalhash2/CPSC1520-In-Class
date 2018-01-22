//select the target element
var featureImage = document.querySelector('img.feature-hidden');

//event listener function
function featureLinkHandler(evt) {
    
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');
    evt.preventDefault();

}
featureImage.addEventListener('click', featureLinkHandler);

