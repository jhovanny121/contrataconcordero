document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', () => {
        photo.querySelector('p').style.color = photo.querySelector('p').style.color === 'red' ? '#333' : 'red';
    });
});