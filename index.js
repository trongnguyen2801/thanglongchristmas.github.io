
window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish')
    setTimeout(function () { preload.classList.add('preload-finish');}, 5000);
})
