const imageContainer = document.getElementById('imageContainer');
const loader = document.getElementById('loader');

let imageArray = [];

// Unsplash API
const count = 10;
const apiKey = '8Avx-jRghqyJtkJ1sJ7bt6gvAIcjkKPyXzQfD1UOw2Q';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get phots from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error){
        alert(error);
    }
}

//On Load
getPhotos();