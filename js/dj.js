const artistHolder = document.querySelector('#dj > .dj-wrapper');

const artists = [
    {
        'img' : 'https://www.pollvanghent.be/images/koen.jpg',
        'name' : 'Koen',
        'style' : 'Stijl',
        'about' : 'Koen is een xyz',
    },
    {
        'img' : 'https://www.pollvanghent.be/images/koen.jpg',
        'name' : 'Koen',
        'style' : 'Stijl',
        'about' : 'Koen is een xyz',
    },
    {
        'img' : 'https://www.pollvanghent.be/images/koen.jpg',
        'name' : 'Koen',
        'style' : 'Stijl',
        'about' : 'Koen is een xyz',
    },
    {
        'img' : 'https://www.pollvanghent.be/images/koen.jpg',
        'name' : 'Koen',
        'style' : 'Stijl',
        'about' : 'Koen is een xyz',
    },
    {
        'img' : 'https://www.pollvanghent.be/images/koen.jpg',
        'name' : 'Koen',
        'style' : 'Stijl',
        'about' : 'Koen is een xyz',
    },
    {
        'img' : 'https://www.pollvanghent.be/images/koen.jpg',
        'name' : 'Koen',
        'style' : 'Stijl',
        'about' : 'Koen is een xyz',
    },
    {
        'img' : 'https://www.pollvanghent.be/images/koen.jpg',
        'name' : 'Koen',
        'style' : 'Stijl',
        'about' : 'Koen is een xyz',
    },
    {
        'img' : 'https://www.pollvanghent.be/images/koen.jpg',
        'name' : 'Koen',
        'style' : 'Stijl',
        'about' : 'Koen is een xyz',
    }
];

// Create client logos section
function createDJ() {
    for (let i = 0; i < artists.length; i++) {
        const artistTemplate = `
            <div class="item">
                <img class="artist" src="${artists[i].img}" alt="${artists[i].name}">
                <h3 class="name">
                    ${artists[i].name}
                </h3>
                <p class="style">
                    ${artists[i].style}
                </p>
                <p class="about">
                    ${artists[i].about}
                </p>
            </div>
        `; 
        artistHolder.insertAdjacentHTML("afterbegin", artistTemplate);
    };
};