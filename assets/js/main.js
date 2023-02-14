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
            top: 517,
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
            top: 1765,
            behavior: "smooth"
        });
    } else if (window.innerWidth >= 992) {
        window.scrollTo({
            top: 1650,
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


//SECTION MY-KNOWLEDGE MODALS
document.querySelectorAll('.lang-box').forEach(i => i.addEventListener('click', openModal));
document.querySelectorAll('.lang-img').forEach(i => i.addEventListener('click', openModal));
function openModal(e) {
    let langTarget = e.target;
    let modal = document.querySelector('#knowledge-modal');
    if (langTarget.classList.contains('html')) {
        modal.querySelector('.modal-header').innerHTML = `
        <img src="assets/imgs/html5-logo.png" alt="HTML Logo" style="width: 35px;" class="me-3">
        <h1 class="modal-title fs-5" id="exampleModalLabel">HTML</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal.querySelector('.modal-body').innerHTML = `
        A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento. <br><br>

        O HTML não é considerado uma linguagem de programação, já que ele não pode criar funcionalidades dinâmicas. Ao invés disso, com o HTML, os usuários podem criar e estruturar seções, parágrafos e links usando elementos, tags e atributos. <br><br>
    
        Confira abaixo alguns dos usos mais comuns para o HTML: <br><br>
        <ul>
            <li style="font-weight: 300;"><div style="font-weight: 500;">Desenvolvimento web.</div> Os desenvolvedores usam códigos HTML para projetar como um navegador vai exibir os elementos das páginas, como textos, hiperlinks e arquivos de mídia.</li>
            <li style="font-weight: 300;"><div style="font-weight: 500;">Navegação na internet.</div> Os usuários podem navegar facilmente e inserir links entre páginas e sites relacionados, já que o HTML é amplamente usado para incorporar hiperlinks.</li>
            <li style="font-weight: 300;"><div style="font-weight: 500;">Documentação.</div> O HTML torna possível a organização e a formatação de documentos, de maneira similar ao Microsoft Word.
            Também vale notar que o HTML agora é considerado um padrão oficial da internet. O World Wide Web Consortium (W3C) mantêm e desenvolve especificações do HTML, além de providenciar atualizações regulares.</li>
        </ul>`;

        modal.querySelector('.modal-footer').innerHTML = `
        Saiba mais em <a href="https://www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos" target="_blank">Hostinger</a>`;
    }
    if (langTarget.classList.contains('css')) {
        modal.querySelector('.modal-header').innerHTML = `
        <img src="assets/imgs/css-logo.png" alt="CSS Logo" style="width: 35px;" class="me-3">
        <h1 class="modal-title fs-5" id="exampleModalLabel">CSS</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal.querySelector('.modal-body').innerHTML = `
        O Cascading Style Sheets (CSS) é uma "folha de estilo" composta por “camadas” e utilizada para definir a apresentação (aparência) em páginas da internet que adotam para o seu desenvolvimento linguagens de marcação (como XML, HTML e XHTML). O CSS define como serão exibidos os elementos contidos no código de uma página da internet e sua maior vantagem é efetuar a separação entre o formato e o conteúdo de um documento. <br><br>

        <div style="font-weight: 500;">Por que o CSS foi criado?</div> <br>

        Com a evolução dos recursos de programação as páginas da internet estavam adotando cada vez mais estilos e variações para deixá-las mais elegantes e atrativas para os usuários. Com isto, linguagens de marcação simples como o HTML, que era destinada para apresentar os conteúdos também precisou ser aprimorada. <br><br>

        Foram criadas novas tags e atributos de estilo para o HTML e em resumo ele passou a exercer tanto a função de estruturar o conteúdo quanto de apresentá-lo para o usuário final. Entretanto, isto começou a trazer um problema para os desenvolvedores, pois não havia uma forma de definir, por exemplo, um padrão para todos os cabeçalhos ou conteúdos em diversas páginas. Ou seja, as alterações teriam que ser feitas manualmente, uma a uma. <br><br>

        A partir destas complicações, nasceu o CSS. Primariamente, foi desenvolvido para habilitar a separação do conteúdo e formato de um documento (na linguagem de formatação utilizada) de sua apresentação, incluindo elementos como cores, formatos de fontes e layout. Esta separação proporcionou uma maior flexibilidade e controle na especificação de como as características serão exibidas, permitiu um compartilhamento de formato e reduziu a repetição no conteúdo estrutural de uma página.`;

        modal.querySelector('.modal-footer').innerHTML = `
        Saiba mais em <a href="https://www.tecmundo.com.br/programacao/2705-o-que-e-css-.htm" target="_blank">TecMundo</a>`;
    }
    if (langTarget.classList.contains('js')) {
        modal.querySelector('.modal-header').innerHTML = `
        <img src="assets/imgs/JavaScript-Logo.png" alt="JAVASCRIPT Logo" style="width: 35px;" class="me-3">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Javascript</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal.querySelector('.modal-body').innerHTML = `
        JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet. As funções de JavaScript podem melhorar a experiência do usuário durante a navegação em um site, como, por exemplo, desde a atualização do feed na página da mídia social até a exibição de animações e mapas interativos. Como uma linguagem de script do lado do cliente, ele é uma das tecnologias principais da World Wide Web. Por exemplo, ao navegar na Internet, é possível visualizar a qualquer momento um carrossel de imagens, um menu suspenso “clicar para visualizar” ou mesmo mudar dinamicamente as cores dos elementos de uma página da Web. Tudo isso graças ao JavaScript. <br><br>

        <div style="font-weight: 500;">Qual a utilidade do JavaScript?</div>
        Anteriormente, as páginas da Web eram estáticas como páginas em um livro. Uma página estática exibia basicamente informações em um layout fixo e não fazia tudo que esperamos de um site moderno hoje em dia. O JavaScript surgiu como uma tecnologia do lado do navegador para tornar as aplicações Web mais dinâmicas. Ao usar JavaScript, os navegadores passaram a ser capazes de responder a interações do usuário e alterar o layout do conteúdo na página. <br><br>

        À medida que a linguagem amadureceu, desenvolvedores de JavaScript estabeleceram bibliotecas, frameworks e práticas de programação, além de começar a usá-la fora dos navegadores da Web. Hoje em dia, é possível usar JavaScript para desenvolvimento tanto do lado do cliente quanto do lado do servidor.`;

        modal.querySelector('.modal-footer').innerHTML = `
        Saiba mais em <a href="https://aws.amazon.com/pt/what-is/javascript/" target="_blank">Amazon</a>`;
    }
    if (langTarget.classList.contains('bs')) {
        modal.querySelector('.modal-header').innerHTML = `
        <img src="assets/imgs/Bootstrap-logo.png" alt="Bootstrap Logo" style="width: 35px;" class="me-3">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Bootstrap</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal.querySelector('.modal-body').innerHTML = `
        Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma. <br><br>

        Originalmente, o Bootstrap foi desenvolvido para o Twitter por um grupo de desenvolvedores liderados por Mark Otto e Jacob Thornton Logo e se tornou uma das estruturas de front-end e projetos de código aberto mais populares do mundo. <br><br>

        Antes de ser uma estrutura de código-fonte aberto, o Bootstrap era conhecido como Twitter Blueprint. Após alguns meses de desenvolvimento, o Twitter realizou sua primeira Hack Week: o projeto ganhou uma grande popularidade quando desenvolvedores de todos os níveis de habilidade usaram o framework sem qualquer orientação externa. Após o evento, ele serviu como guia de estilo para o desenvolvimento de ferramentas internas na empresa por mais de um ano antes de seu lançamento se tornar público.`;

        modal.querySelector('.modal-footer').innerHTML = `
        Saiba mais em <a href="https://www.alura.com.br/artigos/bootstrap?gclid=CjwKCAiArNOeBhAHEiwAze_nKLcW3nyooSakT9T_-4Q52-xxF2X_1-4e9mJULzZA_hzOfSITdmB_2hoCjAQQAvD_BwE" target="_blank">Alura</a>`;
    }
    if (langTarget.classList.contains('git')) {
        modal.querySelector('.modal-header').innerHTML = `
        <img src="assets/imgs/Git-Icon.png" alt="GIT Logo" style="width: 35px;" class="me-3">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Git</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal.querySelector('.modal-body').innerHTML = `
        O Git é um dos sistemas de controle de versão mais utilizados no mundo de desenvolvimento de software. Ele é um projeto de código aberto desenvolvido em 2005 por Linus Torvalds, o criador do kernel do Linux.<br><br>

        Você provavelmente já deve ter passado pelo momento em que está fazendo um projeto, precisa enviá-lo a alguém e começa a criar vários arquivos com pequenas modificações entre eles, utilizando o nome do arquivo para diferenciar “final”, “final_1”, “final_final”, “final_agora_vai”, e por aí em diante, né? Essa é uma das dores que o Git vem pra resolver!<br><br>

        Ele permite ver o código de outras pessoas colaboradores, as diferenças que foram adicionadas ou removidas e mantém o histórico deles, ou seja, você pode voltar para qualquer versão anterior que estava funcionando, por exemplo.<br><br>`;

        modal.querySelector('.modal-footer').innerHTML = `
        Saiba mais em <a href="https://blog.betrybe.com/git/" target="_blank">Betrybe</a>`;
    }
    if (langTarget.classList.contains('github')) {
        modal.querySelector('.modal-header').innerHTML = `
        <img src="assets/imgs/Github-logo.png" alt="Github Logo" style="width: 35px;" class="me-3">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Github</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal.querySelector('.modal-body').innerHTML = `
        O GitHub é considerado é uma ferramenta essencial para engenheiros de software, com uma popularidade sem igual. Atualmente, ele acomoda mais de 25 milhões de usuários. Isso significa que há um número considerável de profissionais que estão procurando o GitHub para melhorar o fluxo de trabalho e a colaboração.<br><br>

        Em suma, o GitHub é um serviço baseado em nuvem que hospeda um sistema de controle de versão (VCS) chamado Git. Ele permite que os desenvolvedores colaborem e façam mudanças em projetos compartilhados enquanto mantêm um registro detalhado do seu progresso.<br><br>`;

        modal.querySelector('.modal-footer').innerHTML = `
        Saiba mais em <a href="https://www.hostinger.com.br/tutoriais/o-que-github" target="_blank">Hostinger</a>`;
    }
    // if (langTarget.classList.contains('')) {
    //     modal.querySelector('.modal-header').innerHTML = `
    //     `;

    //     modal.querySelector('.modal-body').innerHTML = `
    //     `;

    //     modal.querySelector('.modal-footer').innerHTML = `
    //     `;
    // }
}


//SECTION PROJECTS MODALS
document.querySelectorAll('.project-img').forEach(i => i.addEventListener('click', openModal2));
function openModal2(e) {
    let pTarget = e.target;
    let modal2 = document.querySelector('#projects-modal');
    if (pTarget.classList.contains('educationWebsite')) {
        modal2.querySelector('.modal-header').innerHTML = `
        <h1 class="modal-title fs-5" style="font-weight: 400;" id="exampleModalLabel">Site de Educação</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal2.querySelector('.modal-body').innerHTML = `
        Some quick example text to build on the card title and make up the bulk of the card's content.`;

        modal2.querySelector('.modal-footer').innerHTML = `
        <a href="https://github.com/vinicius-koga/Education-Website" target="_blank"><button class="btn cardButton">Ver repositório <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>
        <a href="https://vinicius-koga.github.io/Education-Website/" target="_blank"><button class="btn cardButton">Ver projeto <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>`;
    }
    if (pTarget.classList.contains('dashboard')) {
        modal2.querySelector('.modal-header').innerHTML = `
        <h1 class="modal-title fs-5" style="font-weight: 400;" id="exampleModalLabel">Dashboard</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal2.querySelector('.modal-body').innerHTML = `
        Some quick example text to build on the card title and make up the bulk of the card's content.`;

        modal2.querySelector('.modal-footer').innerHTML = `
        <a href="https://github.com/vinicius-koga/Dashboard" target="_blank"><button class="btn cardButton">Ver repositório <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>
        <a href="https://vinicius-koga.github.io/Dashboard/" target="_blank"><button class="btn cardButton">Ver projeto <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>`;
    }
    if (pTarget.classList.contains('primeGaming')) {
        modal2.querySelector('.modal-header').innerHTML = `
        <h1 class="modal-title fs-5" style="font-weight: 400;" id="exampleModalLabel">Prime Gaming Homepage</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal2.querySelector('.modal-body').innerHTML = `
        Some quick example text to build on the card title and make up the bulk of the card's content.`;

        modal2.querySelector('.modal-footer').innerHTML = `
        <a href="https://github.com/vinicius-koga/Prime-Gaming-Clone" target="_blank"><button class="btn cardButton">Ver repositório <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>
        <a href="https://vinicius-koga.github.io/Prime-Gaming-Clone/" target="_blank"><button class="btn cardButton">Ver projeto <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>`;
    }
    if (pTarget.classList.contains('jogoDaVelha')) {
        modal2.querySelector('.modal-header').innerHTML = `
        <h1 class="modal-title fs-5" style="font-weight: 400;" id="exampleModalLabel">Jogo da Velha</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal2.querySelector('.modal-body').innerHTML = `
        Some quick example text to build on the card title and make up the bulk of the card's content.`;

        modal2.querySelector('.modal-footer').innerHTML = `
        <a href="https://github.com/vinicius-koga/Tic-Tac-Toe" target="_blank"><button class="btn cardButton">Ver repositório <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>
        <a href="https://vinicius-koga.github.io/Tic-Tac-Toe/" target="_blank"><button class="btn cardButton">Ver projeto <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>`;
    }
    if (pTarget.classList.contains('formValidator')) {
        modal2.querySelector('.modal-header').innerHTML = `
        <h1 class="modal-title fs-5" style="font-weight: 400;" id="exampleModalLabel">Validador de Formulários</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal2.querySelector('.modal-body').innerHTML = `
        Some quick example text to build on the card title and make up the bulk of the card's content.`;

        modal2.querySelector('.modal-footer').innerHTML = `
        <a href="https://github.com/vinicius-koga/Form-Validator" target="_blank"><button class="btn cardButton">Ver repositório <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>
        <a href="https://vinicius-koga.github.io/Form-Validator/" target="_blank"><button class="btn cardButton">Ver projeto <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>`;
    }
    if (pTarget.classList.contains('calculator')) {
        modal2.querySelector('.modal-header').innerHTML = `
        <h1 class="modal-title fs-5" style="font-weight: 400;" id="exampleModalLabel">Calculadora Simples</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal2.querySelector('.modal-body').innerHTML = `
        Some quick example text to build on the card title and make up the bulk of the card's content.`;

        modal2.querySelector('.modal-footer').innerHTML = `
        <a href="https://github.com/vinicius-koga/Calculator" target="_blank"><button class="btn cardButton">Ver repositório <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>
        <a href="https://vinicius-koga.github.io/Calculator/" target="_blank"><button class="btn cardButton">Ver projeto <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>`;
    }
    if (pTarget.classList.contains('gifSearcher')) {
        modal2.querySelector('.modal-header').innerHTML = `
        <h1 class="modal-title fs-5" style="font-weight: 400;" id="exampleModalLabel">Buscador de Gif's</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal2.querySelector('.modal-body').innerHTML = `
        Some quick example text to build on the card title and make up the bulk of the card's content.`;

        modal2.querySelector('.modal-footer').innerHTML = `
        <a href="https://github.com/vinicius-koga/Gif-Searcher" target="_blank"><button class="btn cardButton">Ver repositório <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>
        <a href="https://vinicius-koga.github.io/Gif-Searcher/" target="_blank"><button class="btn cardButton">Ver projeto <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>`;
    }
    if (pTarget.classList.contains('passwordGen')) {
        modal2.querySelector('.modal-header').innerHTML = `
        <h1 class="modal-title fs-5" style="font-weight: 400;" id="exampleModalLabel">Gerador de Senhas</h1>
        <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>`;

        modal2.querySelector('.modal-body').innerHTML = `
        Some quick example text to build on the card title and make up the bulk of the card's content.`;

        modal2.querySelector('.modal-footer').innerHTML = `
        <a href="https://github.com/vinicius-koga/Password-Generator" target="_blank"><button class="btn cardButton">Ver repositório <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>
        <a href="https://vinicius-koga.github.io/Password-Generator/" target="_blank"><button class="btn cardButton">Ver projeto <i class="bi bi-box-arrow-up-right ms-1"></i></button></a>`;
    }
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