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
    const text = 'DESENVOLVEDOR FRONT-END'
    const textArr = text.split('');
    textArr.forEach((letter, index) => {
        setTimeout(() => {
            el.innerHTML += letter;
        }, 100 * index);
    })
}

const insertText = document.querySelector('.typeTextAnimation');
setTimeout(() => {
    typeTextAnimation(insertText);
}, 1200);


//SCROLL ON CLICK FN
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function scrollToAboutMe() {
    if (window.innerWidth < 992) {
        window.scrollTo({
            top: 417,
            behavior: "smooth"
        });
    } else if (window.innerWidth >= 992) {
        window.scrollTo({
            top: 690,
            behavior: "smooth"
        });
    }
};

function scrollToProjects() {
    if (window.innerWidth < 992) {
        window.scrollTo({
            top: 1665,
            behavior: "smooth"
        });
    } else if (window.innerWidth >= 992) {
        window.scrollTo({
            top: 1610,
            behavior: "smooth"
        });
    }
}


//HEADER ACTIVE LINK OBSERVER
const linkObserver0 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.navList .active').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.navList .inicio').forEach(i => i.classList.add('active'));
        }
    })
})
linkObserver0.observe(document.querySelector('.inicio-intersection'));

const linkObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.navList .active').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.navList .sobre-mim').forEach(i => i.classList.add('active'));
        }
    })
})
linkObserver1.observe(document.querySelector('.aboutme-intersection'));

const linkObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.navList .active').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.navList .projetos').forEach(i => i.classList.add('active'));
        }
    })
})
linkObserver2.observe(document.querySelector('.projects-intersection'));


//SHOW MORE PROJECTS ON MOBILE FN
function showMore() {
    let mobileHidden = document.querySelectorAll('.project-area .mobileHidden');
    let mobileHiddenBtn = document.querySelector('.project-area .seeMoreBtn');
    mobileHidden.forEach(i => {
        if (i.classList.contains('d-none')) {
            i.classList.remove('d-none');
            i.classList.add('d-flex');
            mobileHiddenBtn.innerHTML = 'Ver menos projetos'
        } else if (i.classList.contains('d-flex')) {
            i.classList.remove('d-flex');
            i.classList.add('d-none');
            mobileHiddenBtn.innerHTML = 'Ver mais projetos'
        }
    })

}


//FADE IN ON SCROLL FN
const observer0 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.animated0').classList.add('fadeInLeft');
        }
    })
})
observer0.observe(document.querySelector('.animated0'));

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.animated1').classList.add('fadeInRight');
        }
    })
})
observer1.observe(document.querySelector('.animated1'));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.animated2').classList.add('fadeInLeft');
        }
    })
})
observer2.observe(document.querySelector('.animated2'));