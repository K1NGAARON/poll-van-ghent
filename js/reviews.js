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
        name: 'Lindsy & Thomas',
        date: '18 06 2022',
        message: "Amai, we zijn nog aan het nagenieten van ons trouwfeest op 4 juni. Hoe geweldig was dat. Dankzij Dj Sweeby stond onze dansvloer in vuur en vlam. Jong en oud stonden gewoon te shaken op de dansvloer. Iedereen was heel lovend over de muziek. De begeleiding van Dj Sweeby op ons feest was top! Dikke Merci!!!",
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
        name: 'Stein en Jory',
        date: '29 06 2022',
        message: "Dikke merci Sweeby om van ons trouwfeest een topfeest te maken. Het was echt fantastisch!! De sfeer zat er al in van bij het binnenkomen tot aan het eind. Zowel wij,onze familie en vrienden vonden het een feest om nooit te vergeten! Top Dj!! Zeker een aanrader",
    },
    {
        name: 'Olena & Hans',
        date: '04 07 2022',
        message: "Beste Sweeby, hartelijk dank van ons om van ons huwelijk een spetterend feest te maken. De ideeen die je ingebracht hebt, waren heel goed. Je hebt zelfs ook foto´s en video´s van ons gemaakt, geholpen met de wonderkaarsjes buiten en nog langer gedraaid speciaal voor ons. Wij bevelen je heel graag verder aan andere mensen!!",
    },
    {
        name: 'Céline & Jonas',
        date: '05 07 2022',
        message: "Bedankt DJ Sweeby om ons en de gasten een onvergetelijk dansfeest te bezorgen! Je draaide de beste plaatjes, er was de ganse avond ambiance en de dansvloer heeft niet leeg gestaan. Kortom, het was TOP en we zijn blij dat je deel uitmaakte van onze mooiste dag. Doe vooral verder zoals je bezig bent! Groetjes, Céline & Jonas",
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
        name: 'Matthijs & Lien',
        date: '26 07 2022',
        message: "Dag DJ SWEEBY, We hadden je uitgekozen obv een trouwfeest van een collega, 3 jaar geleden. Een DJ kiezen blijft uiteindelijk altijd wel een beetje een gok, maar jij kon van begin tot einde onze gasten op de dansvloer krijgen en houden. De muziekstijl was een perfecte mix tussen modern, jaren 80 - 90, en de klassiekers waardoor jong en oud zich te pletter amuseerden! We konden in onze wildste dromen zo'n mooie trouw niet voorzien hebben, bedankt!",
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