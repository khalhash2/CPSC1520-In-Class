// 1. select the target element
var featureImage = document.querySelector('img.feature');
var featureLink = document.querySelector('a.feature.link');

// 2. create the event listener function
function HandleFeatureClick() {
    console.log('img.feature was clicked...');
    //Grabs the HTMLelement with a .feature and a .description class
    var desc = document.querySelector('.feature.description');
    //ALLHTMLelement objects have .classList property that is a collection of class names
    desc.classList.remove('hidden');
}

function handleFeatureLinkClick(evt) {
    console.log('a.feature.link was clicked...');
    //set the image src to the author's href value
    featureImage.src = featureLink.href;

    //make the image visible 
    featureImage.classList.remove('hidden');

    //do not load the image in the page
    evt.preventDefault();
}

// 3. add event listener
featureImage.addEventListener('click', HandleFeatureClick);
featureLink.addEventListener('click', handleFeatureLinkClick);


//featureImage.src=evt.target.href;