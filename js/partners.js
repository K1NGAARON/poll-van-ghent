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
        'img' : '../img/partners/',
        'url' : 'https://www.ceremonie-claeysduerinck.be/'
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