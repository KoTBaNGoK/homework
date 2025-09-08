function openModal() {
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

document.addEventListener('click', function (event) {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.querySelector('.modal.show')) {
        closeModal();
    }
});