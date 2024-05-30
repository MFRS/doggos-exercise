//Get a dog photo from the dog.ceo api and place the photo in the DOM
let currentDogbreed = null;

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        const breeds = Object.keys(data.message)
        const ul = document.createElement('ul')
        // pick a random breed from the list of breeds
        const randomIndex = Math.floor(Math.random() * breeds.length)
        const breed = breeds[randomIndex]
        // capitalize the first letter of the breed
        breedH1 = breed.charAt(0).toUpperCase() + breed.slice(1)
        currentDogbreed = breed
        // const li = document.createElement('li')
        const h1 = document.getElementById('header')
        h1.children[0].innerText = breedH1

        getDogPhoto(breed)
        // getDogBreedInfo(breed)
        // li.textContent = breed
        // ul.appendChild(li)
        // document.body.appendChild(ul)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

function getDogPhoto(breed) {
    let breedUrl = 'https://dog.ceo/api/breed/' + breed + '/images/random'

    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            // header class h1
            // look for a image with height of 1080px
            // for (let i = 0; i < data.message.length; i++) {
            //     // console.log(data.message[i])
            //     var img = new Image;
            //     img.onload = function () {
            //         console.log(img.width, img.height);
            //         if (img.height > 1000) {
            //             const h1 = document.getElementById('bg')
            //             h1.style.backgroundImage = `url(${data.message[i]})`
            //         }
            //     };
            //     img.src = data.message[i];
            // }


            const h1 = document.getElementById('bg')
            h1.style.backgroundImage = `url(${data.message})`
            // scale image to fit the screen
            h1.style.backgroundSize = 'contain'
            // const img = document.createElement('img')
            // img.src = data.message
            // document.body.appendChild(img)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function getDogBreedInfo(breed) {
    fetch('https://en.wikipedia.org/wiki/' + breed)
        .then(res => res.json())
        .then(data => {
            console.log(data.message)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
