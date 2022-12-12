/* This will make the button work when clicked on*/
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

 $('.instagram-media').contents().find("head").append('<link rel="stylesheet" href="app/css/iframe.css" type="text/css" />');