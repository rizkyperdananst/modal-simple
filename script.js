const btn = document.querySelector('button');
const close = document.querySelector('.modal-content span');
const modal = document.querySelector('.modal');

btn.addEventListener('click', function() {
    modal.style.display = 'block';
})

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
})