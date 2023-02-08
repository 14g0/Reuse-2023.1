function TemplateE() {
    const Meio = document?.getElementById('Meio');
    const Direita = document?.getElementById('Dir');
    const Esquerda = document?.getElementById('Esq'); 
    var troca;

    Meio.style.transform = 'scale(0.65, 0.65) translateX(31.45vw) translateY(0.7vh)';
    Direita.style.zIndex = '-1';
    Direita.style.transform = 'translateX(-40.85vw)';
    Esquerda.style.transform = 'scale(1.5, 1.5) translateX(13.67vw) translateY(-0.7vh)'

    setTimeout(() => {
        troca = Meio.innerHTML;
        Meio.innerHTML = Esquerda.innerHTML;
        Esquerda.innerHTML = Direita.innerHTML;
        Direita.innerHTML = troca;

        Meio.style.transition = 'transform 0s ease';
        Direita.style.transition = 'transform 0s ease';
        Esquerda.style.transition = 'transform 0s ease';

        Meio.style.transform = '';
        Direita.style.zIndex = '';
        Direita.style.transform = '';
        Esquerda.style.transform = '';

        const imgMeio = document?.querySelector('.imgMeio');
        const imgEsq = document?.querySelector('.imgEsq');
        const imgDir = document?.querySelector('.imgDir');
        imgMeio.classList.replace('imgMeio', 'imgDir');
        imgEsq.classList.replace('imgEsq', 'imgMeio');
        imgDir.classList.replace('imgDir', 'imgEsq');

        const laterais = document.querySelectorAll('button h2');
        laterais[0].classList.add('laterais');
        laterais[1].classList.remove('laterais');
        laterais[2].classList.add('laterais');
        setTimeout(() => {
            Meio.style.transition = 'transform 0.5s ease';
            Direita.style.transition = 'transform 0.5s ease';
            Esquerda.style.transition = 'transform 0.5s ease';
        }, 200) 
    }, 500);
}

function TemplateD() {
    const Meio = document?.getElementById('Meio');
    const Direita = document?.getElementById('Dir');
    const Esquerda = document?.getElementById('Esq'); 
    var troca;

    Meio.style.transform = 'scale(0.65, 0.65) translateX(-31.45vw) translateY(0.7vh)';
    Esquerda.style.zIndex = '-1';
    Esquerda.style.transform = 'translateX(40.85vw)';
    Direita.style.transform = 'scale(1.5, 1.5) translateX(-13.67vw) translateY(-0.7vh)'

    setTimeout(() => {
        troca = Meio.innerHTML;
        Meio.innerHTML = Direita.innerHTML;
        Direita.innerHTML = Esquerda.innerHTML;
        Esquerda.innerHTML = troca;

        Meio.style.transition = 'transform 0s ease';
        Esquerda.style.transition = 'transform 0s ease';
        Direita.style.transition = 'transform 0s ease';

        Meio.style.transform = '';
        Esquerda.style.zIndex = '';
        Esquerda.style.transform = '';
        Direita.style.transform = '';

        const imgMeio = document?.querySelector('.imgMeio');
        const imgEsq = document?.querySelector('.imgEsq');
        const imgDir = document?.querySelector('.imgDir');
        imgMeio.classList.replace('imgMeio', 'imgEsq');
        imgEsq.classList.replace('imgEsq', 'imgDir');
        imgDir.classList.replace('imgDir', 'imgMeio');

        const laterais = document.querySelectorAll('button h2');
        laterais[0].classList.add('laterais');
        laterais[1].classList.remove('laterais');
        laterais[2].classList.add('laterais');
        setTimeout(() => {
            Meio.style.transition = 'transform 0.5s ease';
            Esquerda.style.transition = 'transform 0.5s ease';
            Direita.style.transition = 'transform 0.5s ease';
        }, 200) 
    }, 500);
}