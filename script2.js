function showFact(id) {
    const factElement = document.getElementById(`${id}-fact`);
    factElement.style.display = factElement.style.display === 'none' || factElement.style.display === '' ? 'block' : 'none';
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const personCards = document.querySelectorAll('.person-card');

    personCards.forEach(card => {
        const name = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = name.includes(searchTerm) ? 'block' : 'none';
    });
});
