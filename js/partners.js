const partnersWrapper = document.querySelector('#partners > .wrapper');

const partners = [
    {
        'name' : 'Viva Blooming',
        'category' : 'bloemen',
        'img' : '../img/partners/viva-blooming.jpg',
        'url' : 'https://www.vivablooming.be/'
    },
    {
        'name' : 'De Flitspaal',
        'category' : 'flitspaal',
        'img' : '../img/partners/flitspaal.jpg',
        'url' : 'https://deflitspaal.be/'
    },
    {
        'name' : 'Ceremonie Devolder',
        'category' : 'ceremonie',
        'img' : '../img/partners/ceremonie-devolder.jpg',
        'url' : 'http://ceremonie-devolder.be/'
    },
    {
        'name' : 'Claeys & Duerinck',
        'category' : 'ceremonie',
        'img' : '../img/partners/clayes.jpg',
        'url' : 'https://www.ceremonie-claeysduerinck.be/'
    },
    {
        'name' : 'Danny David',
        'category' : 'ceremonie',
        'img' : '../img/partners/danny-david.jpg',
        'url' : 'https://dannydavid.be/ceremoniemeester/'
    },
    {
        'name' : 'Ceremonie Mondy',
        'category' : 'ceremonie',
        'img' : '../img/partners/mondy.jpg',
        'url' : 'http://www.ceremonie-mondy.be/'
    },
    {
        'name' : 'Ceremoniekledij Vanwynsberghe',
        'category' : 'kledij',
        'img' : '../img/partners/kleding.jpg',
        'url' : 'https://www.ceremoniekledijvanwynsberghe.be/'
    },
    {
        'name' : 'Sfeermomenten',
        'category' : 'zang',
        'img' : '../img/partners/sfeermomenten.png',
        'url' : 'https://www.sfeermomenten.be/'
    },
    {
        'name' : 'Abo Songs',
        'category' : 'zang',
        'img' : '../img/partners/abo-songs.jpg',
        'url' : 'https://www.abosongs.be/'
    },
    {
        'name' : 'Chelsy',
        'category' : 'zang',
        'img' : '../img/partners/chelsy.jpg',
        'url' : 'https://www.chelsy.be/'
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    },
    {
        'name' : '',
        'category' : '',
        'img' : '../img/partners/',
        'url' : ''
    }
];



function createPartners(e) {
    for (let i = 0; i < partners.length; i++) {
        const template = `

            `;
            partnersWrapper.insertAdjacentHTML("afterbegin", template);
    }
};


$(document).ready(createPartners);