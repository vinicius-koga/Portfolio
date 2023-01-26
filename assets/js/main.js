//HEADER SHOW ON SCROLL-UP FUNCTION
let lastScrollTop = 0;
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset
    if (scrollTop > lastScrollTop) {
        header.style.top = '-71px';
    } else {
        header.style.top = '0px';
    }
    lastScrollTop = scrollTop;
});