import { data } from '../../data/data';
import './skills.css';

const main = document.querySelector('main');

export const printSkills = () => {
    const skillsSection = document.createElement('section');
    skillsSection.id = 'skills';

    const h2 = document.createElement('h2');
    h2.textContent = 'Habilidades';
    h2.id = 'skillsTitle';

    const skillsDiv = document.createElement('div');

    for(const skill of data.skills) {
        const logo = document.createElement('img');
        logo.src = skill.logo;
        logo.alt = `Logo de ${skill.name}`;
        logo.id = 'logo';

        const p = document.createElement('p');
        p.textContent = skill.name;

        const article = document.createElement('article');

        article.appendChild(logo);
        article.appendChild(p);
        skillsDiv.appendChild(article);
    }

    skillsSection.appendChild(h2);
    skillsSection.appendChild(skillsDiv);

    main.appendChild(skillsSection);
}