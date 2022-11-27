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
        'name' : 'Alex Vdb',
        'category' : 'fotograaf',
        'img' : '../img/partners/alex-vdb.jpg',
        'url' : 'https://www.alexvdb.be/'
    },
    {
        'name' : 'Ipon',
        'category' : 'fotograaf',
        'img' : '../img/partners/ipon.jpg',
        'url' : 'https://ipon.be/'
    },
    {
        'name' : 'Annelies',
        'category' : 'fotograaf',
        'img' : '../img/partners/annelies.jpg',
        'url' : 'https://annelies.photos/'
    },
    {
        'name' : 'Foto Pruvoost',
        'category' : 'fotograaf',
        'img' : '../img/partners/pruvoost.jpg',
        'url' : 'https://www.fotopruvoost.be/'
    },
    {
        'name' : 'Foto Aan Huis',
        'category' : 'fotograaf',
        'img' : '../img/partners/foto-aan-huis.jpg',
        'url' : 'https://fotoaanhuis.be/'
    },
    {
        'name' : 'Eye Catcher Photography',
        'category' : 'fotograaf',
        'img' : '../img/partners/eyecatcher.jpg',
        'url' : 'https://www.eyecatcherphotography.be/'
    },
    {
        'name' : 'Dm Fotografie',
        'category' : 'fotograaf',
        'img' : '../img/partners/dm.jpg',
        'url' : 'https://www.dmfotografie.be/'
    },
    {
        'name' : 'Andy Hauman',
        'category' : 'fotograaf',
        'img' : '../img/partners/andy.jpg',
        'url' : 'https://www.fotografie-hauman.be/'
    },
    {
        'name' : 'David Deman',
        'category' : 'fotograaf',
        'img' : '../img/partners/david.jpg',
        'url' : 'https://www.daviddeman.be/'
    },
    {
        'name' : 'Kevin Dandenberghe',
        'category' : 'fotograaf',
        'img' : '../img/partners/kevin.jpg',
        'url' : 'https://www.kevin-v.com/'
    },
    {
        'name' : 'Ik Film Je',
        'category' : 'video',
        'img' : '../img/partners/ikfilmje.jpg',
        'url' : 'https://www.ikfilmje.be/'
    },
    {
        'name' : 'SV Video',
        'category' : 'video',
        'img' : '../img/partners/sv.jpg',
        'url' : 'http://www.sv-video.be/'
    },
    {
        'name' : 'As Video',
        'category' : 'video',
        'img' : '../img/partners/as.jpg',
        'url' : 'http://www.asvideo.be/'
    },
    {
        'name' : 'Duchateau Films',
        'category' : 'video',
        'img' : '../img/partners/duchateau.jpg',
        'url' : 'https://www.duchateaufilms.be/'
    },
    {
        'name' : 'RVD Videografie',
        'category' : 'video',
        'img' : '../img/partners/rvd.jpg',
        'url' : 'http://rvdvideografie.be/'
    },
    {
        'name' : 'Van Wonterghem Catering',
        'category' : 'catering',
        'img' : '../img/partners/wonterghem.jpg',
        'url' : 'https://vanwonterghemcatering.be/'
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