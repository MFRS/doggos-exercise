//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        const img = document.createElement('img')
        img.src = data.message
        document.body.appendChild(img)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
