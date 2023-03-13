const toogle = document.getElementById('tooglDark');
const body = document.querySelector('body');

toogle.addEventListener('click', function() {
    this.classList.toogle('bi-moon');
})