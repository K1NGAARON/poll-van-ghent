const partnersWrapper = document.querySelector('#partners .wrapper');

const partners = [
    {
        'name' : 'Viva Blooming',
        'category' : 'bloemen',
        'img' : './img/partners/viva-blooming.jpg',
        'url' : 'https://www.vivablooming.be/'
    },
    {
        'name' : 'De Flitspaal',
        'category' : 'flitspaal',
        'img' : './img/partners/flitspl.jpg',
        'url' : 'https://deflitspaal.be/'
    },
    {
        'name' : 'Ceremonie Devolder',
        'category' : 'ceremonie',
        'img' : './img/partners/devold.jpg',
        'url' : 'http://ceremonie-devolder.be/'
    },
    {
        'name' : 'Claeys & Duerinck',
        'category' : 'ceremonie',
        'img' : './img/partners/claeeyz.jpg',
        'url' : 'https://www.ceremonie-claeysduerinck.be/'
    },
    {
        'name' : 'Danny David',
        'category' : 'ceremonie',
        'img' : './img/partners/dannyd.jpg',
        'url' : 'https://dannydavid.be/ceremoniemeester/'
    },
    {
        'name' : 'Ceremonie Mondy',
        'category' : 'ceremonie',
        'img' : './img/partners/mondy.jpg',
        'url' : 'http://www.ceremonie-mondy.be/'
    },
    {
        'name' : 'Ceremoniekledij Vanwynsberghe',
        'category' : 'kledij',
        'img' : './img/partners/kleij.jpg',
        'url' : 'https://www.ceremoniekledijvanwynsberghe.be/'
    },
    {
        'name' : 'Sfeermomenten',
        'category' : 'zang',
        'img' : './img/partners/sfeermomenten.png',
        'url' : 'https://www.sfeermomenten.be/'
    },
    {
        'name' : 'Abo Songs',
        'category' : 'zang',
        'img' : './img/partners/abo-songs.jpg',
        'url' : 'https://www.abosongs.be/'
    },
    {
        'name' : 'Chelsy',
        'category' : 'zang',
        'img' : './img/partners/chelsyh.jpg',
        'url' : 'https://www.chelsy.be/'
    },
    {
        'name' : 'Alex Vdb',
        'category' : 'fotograaf',
        'img' : './img/partners/alexvdb.jpg',
        'url' : 'https://www.alexvdb.be/'
    },
    {
        'name' : 'Ipon',
        'category' : 'fotograaf',
        'img' : './img/partners/ipon.jpg',
        'url' : 'https://ipon.be/'
    },
    {
        'name' : 'Annelies',
        'category' : 'fotograaf',
        'img' : './img/partners/anneliesp.png',
        'url' : 'https://annelies.photos/'
    },
    {
        'name' : 'Foto Pruvoost',
        'category' : 'fotograaf',
        'img' : './img/partners/pruvoost.jpg',
        'url' : 'https://www.fotopruvoost.be/'
    },
    {
        'name' : 'Foto Aan Huis',
        'category' : 'fotograaf',
        'img' : './img/partners/foto-aan-huis.jpg',
        'url' : 'https://fotoaanhuis.be/'
    },
    {
        'name' : 'Eye Catcher Photography',
        'category' : 'fotograaf',
        'img' : './img/partners/eyecatcher.jpg',
        'url' : 'https://www.eyecatcherphotography.be/'
    },
    {
        'name' : 'Dm Fotografie',
        'category' : 'fotograaf',
        'img' : './img/partners/dmf.jpg',
        'url' : 'https://www.dmfotografie.be/'
    },
    {
        'name' : 'Andy Hauman',
        'category' : 'fotograaf',
        'img' : './img/partners/andyh.jpg',
        'url' : 'https://www.fotografie-hauman.be/'
    },
    {
        'name' : 'David Deman',
        'category' : 'fotograaf',
        'img' : './img/partners/daviddeman.jpg',
        'url' : 'https://www.daviddeman.be/'
    },
    {
        'name' : 'Kevin Vandenberghe',
        'category' : 'fotograaf',
        'img' : './img/partners/kevin.jpg',
        'url' : 'https://www.kevin-v.com/'
    },
    {
        'name' : 'Ik Film Je',
        'category' : 'video',
        'img' : './img/partners/ikfilmje.jpg',
        'url' : 'https://www.ikfilmje.be/'
    },
    {
        'name' : 'SV Video',
        'category' : 'video',
        'img' : './img/partners/sv.jpg',
        'url' : 'http://www.sv-video.be/'
    },
    {
        'name' : 'As Video',
        'category' : 'video',
        'img' : './img/partners/as.jpg',
        'url' : 'http://www.asvideo.be/'
    },
    {
        'name' : 'Duchateau Films',
        'category' : 'video',
        'img' : './img/partners/duchateau.jpg',
        'url' : 'https://www.duchateaufilms.be/'
    },
    {
        'name' : 'RVD Videografie',
        'category' : 'video',
        'img' : './img/partners/rvd.png',
        'url' : 'http://rvdvideografie.be/'
    },
    {
        'name' : 'Van Wonterghem Catering',
        'category' : 'catering',
        'img' : './img/partners/wonterghem.jpg',
        'url' : 'https://vanwonterghemcatering.be/'
    },
    {
        'name' : 'Traiteur Leconte',
        'category' : 'catering',
        'img' : './img/partners/leconte.jpg',
        'url' : 'https://www.traiteur-leconte.com/nl/'
    },
    {
        'name' : 'Ma Kwizien',
        'category' : 'catering',
        'img' : './img/partners/mak.jpg',
        'url' : 'https://www.makwizien.be/'
    },
    {
        'name' : 'Le Saulchoir',
        'category' : 'location',
        'img' : './img/partners/chat.jpg',
        'url' : 'https://lesaulchoir.be/nl/'
    },
    {
        'name' : 'Van Wonterghem',
        'category' : 'location',
        'img' : './img/partners/van-wonterghem.jpg',
        'url' : 'https://vanwonterghem.be/'
    },
    {
        'name' : 'De Steenovenhoeve',
        'category' : 'loction',
        'img' : './img/partners/steenovenhoeve.jpg',
        'url' : 'http://www.steenovenhoeve.be/'
    },
    {
        'name' : 'Salons Saintgermain',
        'category' : 'location',
        'img' : './img/partners/salons.jpg',
        'url' : 'https://www.salonssaintgermain.be/nl'
    },
    {
        'name' : 'Salons Cortina',
        'category' : 'location',
        'img' : './img/partners/cortina.jpg',
        'url' : 'https://www.salonscortina.be/'
    },
    {
        'name' : 'Alta Ripa',
        'category' : 'location',
        'img' : './img/partners/alta.jpg',
        'url' : 'https://www.alta-ripa.be/'
    },
    {
        'name' : 'La Renaissance',
        'category' : 'location',
        'img' : './img/partners/renaissance.jpg',
        'url' : 'https://www.larenaissance.be/nl'
    },
    {
        'name' : 'Hove Van Herpelgem',
        'category' : 'location',
        'img' : './img/partners/vanherpelgem.jpg',
        'url' : 'http://www.hovevanherpelgem.com/'
    },
    {
        'name' : 'Domein Vossenberg',
        'category' : 'location',
        'img' : './img/partners/vossenberg.jpg',
        'url' : 'https://www.vossenberg.be/'
    },
    {
        'name' : 'Blommerie',
        'category' : 'location',
        'img' : './img/partners/blommerie.jpg',
        'url' : 'https://www.blommerie.com/nl'
    },
    {
        'name' : 'Bierkasteel',
        'category' : 'location',
        'img' : './img/partners/bierkasteel.jpg',
        'url' : 'https://www.vanhonsebrouck.be/bezoek/bierkasteel/'
    },
    {
        'name' : 'Hof Ter Molen',
        'category' : 'location',
        'img' : './img/partners/termolen.jpg',
        'url' : 'https://www.termolen.be/'
    },
    {
        'name' : 'Cleen Schardauw',
        'category' : 'location',
        'img' : './img/partners/cleen.jpg',
        'url' : 'https://cleenschardauw.be/'
    },
    {
        'name' : 'Domein Carlton',
        'category' : 'location',
        'img' : './img/partners/carlton.jpg',
        'url' : 'https://www.domeincarlton.be/'
    },
    {
        'name' : 'Hof Ter Heulebeke',
        'category' : 'location',
        'img' : './img/partners/chez-koen.jpg',
        'url' : 'https://www.chezkoen.be/hof-ter-heulebeke-feestzalen/'
    },
    {
        'name' : 'Ter Eeste',
        'category' : 'location',
        'img' : './img/partners/tereeste.jpg',
        'url' : 'https://www.tereeste.be/'
    },
    {
        'name' : 'Kasteel Te Lake',
        'category' : 'location',
        'img' : './img/partners/kasteel.jpg',
        'url' : 'http://www.kasteeltelake.be/nl'
    },
    {
        'name' : 'Salons De Lelie',
        'category' : 'location',
        'img' : './img/partners/salons-lelie.png',
        'url' : 'https://www.salonsdelelie.be/nl'
    },
    {
        'name' : 'Kasteel Van Moerkerke',
        'category' : 'location',
        'img' : './img/partners/vanmoerkerke.jpg',
        'url' : 'https://kasteelvanmoerkerke.be/'
    },
    {
        'name' : 'Denotter',
        'category' : 'location',
        'img' : './img/partners/denotter.jpg',
        'url' : 'https://denotter.be/'
    },
    {
        'name' : 'Shamrock',
        'category' : 'location',
        'img' : './img/partners/shamrock.jpg',
        'url' : 'https://www.shamrock.be/nl'
    },
    {
        'name' : 'Salons De Vrede',
        'category' : 'location',
        'img' : './img/partners/salonsdevrede.jpg',
        'url' : 'https://www.salonsdevrede.be/'
    },
    {
        'name' : 'Salons Leieburcht',
        'category' : 'location',
        'img' : './img/partners/leieburcht.jpg',
        'url' : 'https://www.leieburcht.be/nl'
    },
    {
        'name' : 'Ter Biest',
        'category' : 'location',
        'img' : './img/partners/terbiest.jpg',
        'url' : 'https://www.terbiest.be/'
    },
    {
        'name' : 'Fabriekspand',
        'category' : 'location',
        'img' : './img/partners/fabriekspand.jpg',
        'url' : 'https://www.fabriekspand.be/'
    },
    {
        'name' : 'EMW Verhuur',
        'category' : 'renting',
        'img' : './img/partners/emw.jpg',
        'url' : 'https://www.emwverhuur.be/'
    }
];

function createPartners(e) {
    for (let i = 0; i < partners.length; i++) {
        const template = `
            <div class="item partner ${partners[i].category}">
                <div class="overlay">
                    <img src="${partners[i].img}" alt="${partners[i].name}">
                    <div class="service-content">
                        <h3>
                            ${partners[i].name}
                        </h3>
                        <a class="primary-btn" href="${partners[i].url}" target="_blank">
                            Meer info
                        </a>
                    </div>
                </div>
            </div>
        `;
        partnersWrapper.insertAdjacentHTML("afterbegin", template);
    }
};


function hidePartners(e) {
    $('.partner').addClass('hidden');
}


function filterPartners(e) {
    const activeSelection = document.querySelector('#filter').value;

    hidePartners();

    if (activeSelection === 'bloemen') {
        $('.bloemen').removeClass('hidden');
    } else if (activeSelection === 'fotograaf') {
        $('.fotograaf').removeClass('hidden');
    } else if (activeSelection === 'video') {
        $('.video').removeClass('hidden');
    } else if (activeSelection === 'zang') {
        $('.zang').removeClass('hidden');
    } else if (activeSelection === 'ceremonie') {
        $('.ceremonie').removeClass('hidden');
    } else if (activeSelection === 'locaties') {
        $('.location').removeClass('hidden');
    } else if (activeSelection === 'catering') {
        $('.catering').removeClass('hidden');
    } else if (activeSelection === 'all') {
        $('.partner').removeClass('hidden');
    } else if (activeSelection === 'verhuur') {
        $('.renting').removeClass('hidden')
    }
};


$(document).ready(createPartners);
$('#filter').change(filterPartners);