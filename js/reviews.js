const toggleFormBtn = document.querySelector('#formToggle');

function toggleForm(e) {
    $('#formToggle').toggle('hidden');
    $('#hiddenForm').toggle('active');
}

$('#formToggle').click(toggleForm);