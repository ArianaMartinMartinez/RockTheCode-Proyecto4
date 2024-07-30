import './aboutMe.css';
import { data } from '../../data/data.js';

const main = document.querySelector('main');

export const printAboutMe = () => {
    const aboutMeSection = document.createElement('section');
    aboutMeSection.id = 'aboutMe';

    const heroArticle = document.createElement('article');
    heroArticle.id = 'heroArticle';

    const descriptionArticle = document.createElement('article');
    descriptionArticle.id = 'descriptionArticle';
    
    printHero(heroArticle);
    printDescription(descriptionArticle);

    aboutMeSection.appendChild(heroArticle);
    aboutMeSection.appendChild(descriptionArticle);

    main.appendChild(aboutMeSection);
}

const printHero = (article) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');

    h1.textContent = `¡Hola! Soy ${data.fullName}`;
    h3.textContent = data.job;
    img.src = data.photo;
    img.alt = 'Ariana';
    img.id = 'imgAriana';

    div.appendChild(h1);
    div.appendChild(h3);
    article.appendChild(div);
    article.appendChild(img);
}

const printDescription = (article) => {
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    h2.textContent = 'Sobre mí';
    h2.id = 'aboutMeTitle';
    p1.textContent = data.aboutMe1;
    p2.textContent = data.aboutMe2;
    p3.textContent = data.aboutMe3;

    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
}