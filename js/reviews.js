const toggleFormBtn = document.querySelector('#formToggle');

function toggleForm(e) {
    $('#formToggle').toggle('hidden');
    $('.hiddenForm').toggle('active');
};

const reviewsWrapper = document.querySelector('.reviews > .wrapper');

const reviewsContent = [
    {
        name: 'Laura & Thijs',
        date: '16 06 2022',
        message: "Dag Poll Graag willen we je nog eens uitdrukkelijk bedanken voor het fijne feest zaterdag. We zijn nog steeds aan het nagenieten. Je gevoel voor sfeer en ambiance, je muziekkeuze, je aanvoelen van het publiek, je omgaan met enthousiaste gasten... Het verliep allemaal perfect! DANKJEWEL.",
    },
    {
        name: 'Céline et Rémy',
        date: '27 06 2022',
        message: "Bonjour Poll, Nous souhaitions vous faire un retour concernant la prestation de Nicolas. Nous avons beaucoup apprécier ses conseils, son professionnalisme et sa bonne humeur. Nous avons été ravi de partager ce moment avec Nicolas. Les invités nous ont tous fait remarqué la qualité du travail de Nicolas.",
    },
    {
        name: 'Alexander & Jok',
        date: '28 06 2022',
        message: "Ik laat je graag weten dat we SUPER tevreden zijn van dj Nicolas! De dansvloer heeft volgestaan van begin tot einde. Nicolas voelde het publiek dus heel goed aan. Hij stelde zelf ook voor om kaartjes met verzoeknummers op de tafels te leggen, zodat hij zicht kreeg op de muzieksmaak van de aanwezigen. We hebben de tip gevolgd en dat bleek dus een schot in de roos te zijn. We kregen de voorbije dagen ook al heel wat berichten van vrienden en familie dat het lang geleden was dat ze nog zo'n goed feestje meegemaakt hebben. Kortom, wij zijn heel erg tevreden van jullie diensten en dj Nicolas!",
    },
    {
        name: 'Els',
        date: '25 07 2022',
        message: 'Voor dj Nicolas, GEWOONWEG FANTASTISCH Draaide wat de mensen vroegen, wie er op de dansvloer stond en ging ermee verder Ambiance tot de vroege uurtjes',
    },
    {
        name: 'Mieke & Jochen',
        date: '25 07 2022',
        message: "Dag Poll Jij erg bedankt om er zo’n spetterend feest van te maken! Je hebt voor de nodige ambiance gezorgd en iedereen was vol lof over jou! We zijn ontzettend blij dat we jou als dj hadden! Heeeeel erg bedankt! Zonnige groetjes Mieke en Jochen",
    },
    {
        name: 'Dominique',
        date: '08 04 2023',
        message: "Dag Pol Nog eens een ferme Mercie voor het fantastisch feest dat je ons gegeven hebt .Zoals gewoonlijk was je weer top .DANK U Wel .gr Anneke en Dominique"
    },
    {
        name: "Sofie & Kurt",
        date: "28 04 2023",
        message: "We willen u graag nog eens bedanken om van onze speciale dag zo een mooi feest te maken! Het kon echt niet beter zijn!Iedereen was super onder de indruk van u zangtalent ook. Bedankt voor de foto's :)"
    },
    {
        name: "Lorijn & Kimley",
        date: "",
        message: "Beste Poll Bedankt voor de leuke sfeer fotos van ons trouwfeest :).  Het was zeer tof om iedereen te zien genieten We hebben al veel positieve reacties gehad van aanwezigen. Zowel wij als iedereen die aanwezig was hebben vooral ook genoten van het enthousiasme waarmee je ons feest hebt verzorgd Bedankt om ons feest te voorzien van de nodige sfeer e ambiance",
    },
];

function createReviews(e) {
    for (let i = 0; i < reviewsContent.length; i++) {
        const template = `
            <div class="item">
                <h2>
                    Naam: ${reviewsContent[i].name}
                </h2>
                <p>
                    ${reviewsContent[i].message}
                </p>
            </div>
            `;
        reviewsWrapper.insertAdjacentHTML("afterbegin", template);
    }
};


$('#formToggle').click(toggleForm);

$(document).ready(createReviews);