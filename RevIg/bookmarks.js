
    window.console = window.console || function(t) {};
    if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*"); }

    /* This will make the button work when clicked on*/
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});



