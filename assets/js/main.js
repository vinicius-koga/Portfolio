//SHOW HEADER ON SCROLL-UP FN
let lastScrollTop = 0;
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset
    if (scrollTop > lastScrollTop) {
        header.style.top = '-71px';
        header.style.opacity = '0'
    } else {
        header.style.top = '0px';
        header.style.opacity = '1'
    }
    lastScrollTop = scrollTop;
});