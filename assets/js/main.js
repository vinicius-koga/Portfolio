//SHOW HEADER ON SCROLL FN
const header = document.querySelector('header');
const secBanner = document.querySelector('.banner-area');
document.addEventListener('scroll', () => {
    let scrollOffset = window.pageYOffset;
    console.log(scrollOffset);
    if (scrollOffset > 400) {
        header.style.position = 'fixed';
        header.classList.remove('hiddeHeaderAnimation');
        header.classList.remove('showHeaderTopAnimation');
        header.classList.add('showHeaderAnimation');
    };
    if (scrollOffset < 400 && header.classList.contains('showHeaderAnimation')) {
        header.classList.remove('showHeaderAnimation');
        header.classList.add('hiddeHeaderAnimation');
        setTimeout(() => {
            header.style.position = 'absolute';
            header.classList.remove('hiddeHeaderAnimation');
            header.classList.add('showHeaderTopAnimation');
        }, 300);
    };
});


//TYPING ANIMATION FN
function typeTextAnimation(el) {
    const textArr = el.innerHTML.split('');
    el.innerHTML = '&nbsp;';
    textArr.forEach((letter, index) => {
        setTimeout(() => {
            el.innerHTML += letter;
        }, 100 * index);
    })
}

const insertText = document.querySelector('.typeTextAnimation');
typeTextAnimation(insertText);