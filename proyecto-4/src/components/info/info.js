import { printEducation } from './education/education';
import { printExperience } from './experience/experience';
import './info.css';

const main = document.querySelector('main');

export const printInfo = () => {
    const infoSection = document.createElement('section');
    infoSection.id = 'info';

    const articleTitles = document.createElement('article');
    articleTitles.id = 'infoTitles';

    const h2Education = document.createElement('h2');
    h2Education.textContent = 'Educación';
    h2Education.id = 'education';
    h2Education.addEventListener('click', printEducation);

    const h2Experience = document.createElement('h2');
    h2Experience.textContent = 'Experiencia';
    h2Experience.id = 'experience';
    h2Experience.addEventListener('click', printExperience);

    articleTitles.appendChild(h2Education);
    articleTitles.appendChild(h2Experience);

    const article = document.createElement('article');
    article.id = 'changeInfo';

    infoSection.appendChild(articleTitles);
    infoSection.appendChild(article);

    main.appendChild(infoSection);

    printEducation();
}