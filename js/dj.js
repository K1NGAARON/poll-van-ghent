const artistHolder = document.querySelector('#dj > .row > .wrapper');
console.log(artistHolder);

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
    }
];


function createArtists() {
    for (let i = 0; i < artists.length; i++) {
        const template = `
            <div class="item-wrapper">
                <div class="overlay">
                    <img src="${artists[i].img}" alt="${artists[i].name}">
                    <div class="item-content">
                        <h3>
                            ${artists[i].name}
                        </h3>
                        <p>
                            ${artists[i].about}
                        </p>
                        <a class="primary-btn" href="/contact">
                            Meer info
                        </a>
                    </div>
                </div>
            </div>
        `;
        artistHolder.insertAdjacentHTML("beforeend", template);
    };
};


$(document).ready(function() {
    createArtists();
});