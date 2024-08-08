import { data } from '../../data/data';
import './projects.css';

const main = document.querySelector('main');

export const printProjects = () => {
    const projectsSection = document.createElement('section');
    projectsSection.id = 'projects';

    const h2 = document.createElement('h2');
    h2.textContent = 'Proyectos';
    h2.id = 'projectsTitle';

    const div = document.createElement('div');
    div.id = 'articlesDiv';

    for(const project of data.projects) {
        const article = document.createElement('article');

        const a = document.createElement('a');
        a.href = project.url;
        a.target = '_blank';

        const img = document.createElement('img');
        img.src = project.photo;
        img.alt = project.name;
        img.id = 'imgProject';

        const p = document.createElement('p');
        p.textContent = project.name;

        a.appendChild(img);
        article.appendChild(a);
        article.appendChild(p);
        div.appendChild(article);
    }

    projectsSection.appendChild(h2);
    projectsSection.appendChild(div);

    main.appendChild(projectsSection);
}