const artistHolder = document.querySelector('#dj > .row > .wrapper');
console.log(artistHolder);

const artists = [
    {
        'img' : '../img/dj/poll.jpg',
        'name' : 'DJ Poll Van Ghent',
        'style' : 'Huwelijken',
        'about' : 'Huwelijken vooral voor 30 plussers, privé feesten, jubileums, diner dances. All round dj met veel aandacht voor de sfeer opp de dansvloer. Tweetalig. Muziekvoorkeuren: disco, jaren 70, 80 en 90. Rock en Retro house. Goed dansbare commerciële nummers. 50 jaar dj.',
    },
    {
        'img' : '../img/dj/nicolas.jpg',
        'name' : 'DJ Nicolas',
        'style' : 'Huwelijken',
        'about' : 'Perfect tweetalig, verzorgt ook Franstalige feesten. All round dj. 15 jaar actief als allround disc-jockey.',
    },
    {
        'img' : '../img/dj/sweeby.jpg',
        'name' : 'DJ Sweeby',
        'style' : 'Allround',
        'about' : 'Ik ben al 25 jaar actief als allround Disc-jockey. Mijn doel is dan ook om van iedere gelegenheid, hoe klein of groot dan ook, een passend feest te maken! Daarbij is de interactie tussen het publiek en voor mij als dj erg belangrijk. De mensen en muziek wensen goed aan te voelen, hierop in te spelen met eigentijdse muziek, zodat elke feestgelegenheid gegarandeerd slaagt!',
    },
    {
        'img' : '../img/dj/madgid.jpg',
        'name' : 'DJ Sweeby',
        'style' : 'Huwelijken',
        'about' : 'Mensen animeren en laten dansen zijn nu eenmaal 2 zaken waar ik oprecht gelukkig van word. Een muzikale brunch op zondag, een huwelijksfeest, een jubileum, verjaardagsfeesten en zelfs een foute party. Je kan het zo gek niet bedenken. Als  we de mensen maar gelukkig kunnen maken.',
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