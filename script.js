const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    "https://images.unsplash.com/photo-1501959915551-4e8d30928317",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
];

let index = 0;
const imgElement = document.getElementById("carousel-img");

function changeImage() {
    imgElement.src = images[index];
    index = (index + 1) % images.length;
}

setInterval(changeImage, 2000);
changeImage();