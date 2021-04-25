const title = document.querySelector('h1');
const hero = document.querySelector('.hero');
hero.classList.add('url1');
title.addEventListener('click', () => {
    if (hero.classList.contains('url1')) {
        hero.classList.add('url2');
        hero.classList.remove('url1');
        title.innerText = 'surf';
    } else {
        hero.classList.add('url1');
        hero.classList.remove('url2');
        title.innerText = 'baloons';
    }
})