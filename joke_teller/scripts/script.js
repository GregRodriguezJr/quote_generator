const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function toggleButton() {
    button.disabled = !button.disabled
}

function tellMeJoke(joke) {
    console.log(joke);
    VoiceRSS.speech({
        key: 'c55b9507e42443d8bf1fcad38dbefc2b',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

let joke = '';

async function getJokesApi() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        tellMeJoke(joke);
        toggleButton();
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', getJokesApi);
audioElement.addEventListener('ended', toggleButton);
