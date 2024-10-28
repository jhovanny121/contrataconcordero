document.addEventListener('DOMContentLoaded', loadComments);

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const commentInput = document.getElementById('comment');
    const ratingInput = document.getElementById('rating');

    const newComment = {
        text: commentInput.value,
        rating: ratingInput.value
    };

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment); 
    localStorage.setItem('comments', JSON.stringify(comments)); 

    renderComments();

    commentInput.value = '';
    ratingInput.selectedIndex = 0;
});

function loadComments() {
    renderComments();
}

function renderComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';

    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(comment => {
        const listItem = document.createElement('li');
        listItem.textContent = `Comentario: ${comment.text} - Calificación: ${comment.rating}`;
        commentsList.appendChild(listItem);
    });
}
