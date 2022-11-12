const toggleFormBtn = document.querySelector('#formToggle');

function toggleForm(e) {
    $('#formToggle').toggle('hidden');
    $('#hiddenForm').toggle('active');
};

const reviewsWrapper = document.querySelector('.reviews > .wrapper');

const reviewsContent = [
    {
        'name' :'Aaron & Kitana',
        'date' : '12 November 2022',
        'message' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia repellat a itaque impedit aliquam similique consequuntur excepturi voluptate iusto.'
    },
    {
        'name' :'Aaron & Kitana',
        'date' : '13 November 2022',
        'message' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia repellat a itaque impedit aliquam similique consequuntur excepturi voluptate iusto.'
    },
    {
        'name' :'Aaron & Kitana',
        'date' : '14 November 2022',
        'message' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia repellat a itaque impedit aliquam similique consequuntur excepturi voluptate iusto.'
    },
];

function createReviews(e) {
    for (let i = 0; i <reviewsContent.length; i++) {
        const template = `
        <div class="item">
            <h2>
                Naam: ${reviewsContent[i].name}
            </h2>
            <p class="date">
                ${reviewsContent[i].date}
            </p>
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