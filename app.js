const title = document.querySelector('h1');
const hero = document.querySelector('.hero');
title.addEventListener('click', () => {
    console.log('clicked');
    hero.style.backgroundImage='url(surf.jpeg)';
})